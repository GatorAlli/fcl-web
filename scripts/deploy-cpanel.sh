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

revision="$(git rev-parse HEAD)"
release_dir="$(mktemp -d "$HOME/tmp/felix-website-release.XXXXXXXX")"
trap 'rm -rf -- "$release_dir"' EXIT

release_url="https://github.com/GatorAlli/fcl-web/releases/download/cpanel-$revision/felix-website.tar.gz"
if ! curl --fail --silent --show-error --location --retry 2 --max-time 120 \
  --proto '=https' --proto-redir '=https' \
  --output "$release_dir/felix-website.tar.gz" "$release_url"; then
  printf 'Could not download the build for %s. Check GitHub Actions and retry.\n' "$revision" >&2
  exit 1
fi
tar -xzf "$release_dir/felix-website.tar.gz" -C "$release_dir" --no-same-owner --no-same-permissions
if [[ "$(cat "$release_dir/revision")" != "$revision" ]]; then
  printf 'The downloaded build does not match commit %s.\n' "$revision" >&2
  exit 1
fi

site_dir="$release_dir/out"
test -s "$site_dir/index.html"
test -s "$site_dir/404.html"
test -s "$site_dir/sitemap.xml"
test -s "$site_dir/robots.txt"
test -d "$site_dir/_next/static"

backup_options=()
if [[ -f "$web_root/wp-config.php" ]]; then
  unzip -tq "$legacy_backup"
  backup_options=(--backup --backup-dir="$HOME/felix-website-backups/cutover-files")
fi

cat >"$site_dir/.htaccess" <<'APACHE'
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html

# Send www to the apex domain, keeping the path and query string.
# /.well-known/ stays in place for certificate validation.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.felixbd\.com(:[0-9]+)?$ [NC]
RewriteCond %{REQUEST_URI} !^/\.well-known/
RewriteRule ^ https://felixbd.com%{REQUEST_URI} [R=301,L]
</IfModule>
APACHE

rsync -rt --omit-dir-times --delay-updates --delete-delay \
  "${backup_options[@]}" \
  --exclude='/.well-known/' --exclude='/.ssl-manager/' \
  --exclude='/.hcflag' --exclude='/.litespeed_flag' \
  --exclude='/google*.html' \
  "$site_dir/" "$web_root/"

printf 'Published %s to %s\n' "$(git rev-parse --short HEAD)" "$web_root"
