#!/usr/bin/env bash
set -euo pipefail
umask 022

cd "$(dirname "$0")/.."
web_root="$HOME/public_html"
legacy_backup="$HOME/felix-website-backups/legacy-public_html.zip"
test -d "$web_root"
test ! -L "$web_root"

exec 9>"$HOME/felix-website-deploy.lock"
flock -n 9

export PATH="/opt/alt/alt-nodejs24/root/usr/bin:$PATH"
export FCL_CPANEL_EXPORT=1
export FCL_PUBLIC_URL=https://felixbd.com
export NEXT_TELEMETRY_DISABLED=1

npm ci --include=dev --no-audit --no-fund
NODE_OPTIONS="--max-old-space-size=768 --max-semi-space-size=16" npm run build

test -s out/index.html
test -s out/404.html
test -s out/sitemap.xml
test -s out/robots.txt
test -d out/_next/static

backup_options=()
if [[ -f "$web_root/wp-config.php" ]]; then
  unzip -tq "$legacy_backup"
  backup_options=(--backup --backup-dir="$HOME/felix-website-backups/cutover-files")
fi

cat >out/.htaccess <<'APACHE'
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html
APACHE

rsync -rt --omit-dir-times --delay-updates --delete-delay \
  "${backup_options[@]}" \
  --exclude='/.well-known/' --exclude='/.ssl-manager/' \
  --exclude='/.hcflag' --exclude='/.litespeed_flag' \
  --exclude='/google*.html' \
  out/ "$web_root/"

printf 'Published %s to %s\n' "$(git rev-parse --short HEAD)" "$web_root"
