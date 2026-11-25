# Deploy Felix Controls Limited from cPanel

[felixbd.com](https://felixbd.com) uses the `main` branch of [GatorAlli/fcl-web](https://github.com/GatorAlli/fcl-web). In Namecheap cPanel, the checkout is named **Felix Website** and lives at `~/repositories/fcl-web`. The domain serves files from `~/public_html`.

## Publish an update

The first production release was published from cPanel Terminal on November 26, 2026. The cPanel Git checkout can pull `main`, but the Git deployment process hit the shared host’s build limits. For now, pull in cPanel and run the checked-in deployment script in **cPanel → Terminal**.

```bash
/bin/bash "$HOME/repositories/fcl-web/scripts/deploy-cpanel.sh"
```

## cPanel Git controls

1. Push or merge the changes to `main` on GitHub.
2. In cPanel, open **Git Version Control → Felix Website → Manage → Pull or Deploy**.
3. Click **Update from Remote**. Check that the latest commit appears under **HEAD Commit**. If the deploy button stays disabled after the first pull of `.cpanel.yml`, refresh the page.
4. Click **Deploy HEAD Commit**. Wait for **Last Deployment Information** to show the new commit, then open [felixbd.com](https://felixbd.com) to check the update.

cPanel separates the pull from the deployment. **Update from Remote** changes the checkout. **Deploy HEAD Commit** runs the checked-in `.cpanel.yml` task and publishes the build. The cPanel checkout needs a clean working tree. [cPanel pull deployment documentation](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#set-up-pull-deployment)

## Initial cutover on November 26, 2026

1. In **cPanel → Domains**, confirm that `felixbd.com` points to `/public_html`.
2. Archive the legacy `public_html` directory, including dotfiles, and download a copy. The local backup is `~/Downloads/felixbd-public_html-2026-11-26.zip`. Keep the server copy at `~/felix-website-backups/legacy-public_html.zip`, outside the document root. The ZIP is a file backup. The WordPress database stays in MySQL.
3. In **Git Version Control → Create**, clone `https://github.com/GatorAlli/fcl-web.git` into `repositories/fcl-web`, name it **Felix Website**, and confirm that `main` is checked out.
4. Commit the deployment configuration on GitHub `main` and pull it into **Felix Website**. The Git deployment build failed in cPanel, so the initial cutover ran the same script from the terminal and published `f1f4f78`.
5. Verify the production site. All 46 sitemap URLs returned HTTP 200. Safari rendered the homepage and contact page. The robots file, sitemap, and company profile PDF returned HTTP 200, and an unknown URL returned HTTP 404.

## What cPanel runs

`.cpanel.yml` calls `scripts/deploy-cpanel.sh`. The script uses the host’s Node.js 24 runtime and runs `npm ci` and a production Next.js static export. After checking the exported files, it synchronizes `out/` to `public_html`. It preserves the hosting files used for SSL and Google ownership verification. On the first deployment, the script verifies the legacy ZIP and saves the files it replaces or removes in `~/felix-website-backups/cutover-files/`. [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports)

The host uses glibc 2.28, so this version of Next.js falls back to its WebAssembly compiler. During setup, cPanel builds hit memory and thread limits. The script caps Node.js heap growth and sets `RAYON_NUM_THREADS=1` for the build. If a build fails, cPanel logs the failure under `~/.cpanel/logs/` before the script reaches `public_html`. [Node.js memory flags](https://nodejs.org/download/release/v24.22.1/docs/api/cli.html#--max-old-space-sizesize-in-mib) · [cPanel deployment troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#deployment)

## Roll back a release

For a regular update, revert the offending commit on GitHub `main`, then use the two cPanel buttons to publish the revert. For the original WordPress cutover, extract `~/felix-website-backups/legacy-public_html.zip` into a private directory and restore its `public_html/` contents, including `.htaccess`, to the document root. The existing WordPress database is required for that restore.
