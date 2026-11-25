# Deploy Felix Controls Limited from cPanel

[felixbd.com](https://felixbd.com) uses the `main` branch of [GatorAlli/fcl-web](https://github.com/GatorAlli/fcl-web). In Namecheap cPanel, the checkout is named **Felix Website** and lives at `~/repositories/fcl-web`. The domain serves files from `~/public_html`.

## Publish an update

1. Push or merge the changes to `main` on GitHub.
2. Wait for the matching commit to go green in [Build website for cPanel](https://github.com/GatorAlli/fcl-web/actions/workflows/cpanel-build.yml).
3. In cPanel, open **Git Version Control → Felix Website → Manage → Pull or Deploy**. Click **Update from Remote** and check the commit under **HEAD Commit**.
4. Click **Deploy HEAD Commit**. Refresh the page if **Last Deployment Information** still shows a completed deployment as in progress. Once it shows the new commit, open [felixbd.com](https://felixbd.com) to check the update.

cPanel separates the pull from the deployment. **Update from Remote** changes the checkout. **Deploy HEAD Commit** runs the checked-in `.cpanel.yml` task and publishes the build. The cPanel checkout needs a clean working tree. [cPanel pull deployment documentation](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/#set-up-pull-deployment)

## Initial cutover on November 26, 2026

1. In **cPanel → Domains**, confirm that `felixbd.com` points to `/public_html`.
2. Archive the legacy `public_html` directory, including dotfiles, and download a copy. The local backup is `~/Downloads/felixbd-public_html-2026-11-26.zip`. Keep the server copy at `~/felix-website-backups/legacy-public_html.zip`, outside the document root. The ZIP is a file backup. The WordPress database stays in MySQL.
3. In **Git Version Control → Create**, clone `https://github.com/GatorAlli/fcl-web.git` into `repositories/fcl-web`, name it **Felix Website**, and confirm that `main` is checked out.
4. Commit the deployment configuration on GitHub `main` and pull it into **Felix Website**. The Git deployment build failed in cPanel, so the initial cutover ran the same script from the terminal and published `f1f4f78`.
5. Verify the production site. All 46 sitemap URLs returned HTTP 200. Safari rendered the homepage and contact page. The robots file, sitemap, and company profile PDF returned HTTP 200, and an unknown URL returned HTTP 404.

## How the build reaches cPanel

Namecheap’s Git deployment process hit memory and thread limits building Next.js, so GitHub Actions now builds the static site with Node.js 24. The workflow publishes `felix-website.tar.gz` to a GitHub prerelease tagged `cpanel-<commit SHA>`. The build job has read access, and the publish job uses GitHub’s short-lived repository token to create the release. [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports) · [GitHub Release documentation](https://cli.github.com/manual/gh_release_create)

`.cpanel.yml` calls `scripts/deploy-cpanel.sh`. It downloads the public archive for the checked-out commit, verifies the embedded commit and the exported pages, then synchronizes the build to `public_html`. The script preserves the hosting files used for SSL and Google ownership verification. The WordPress ZIP and the files moved during the cutover are in `~/felix-website-backups/`.

If the release is still building or the download fails, cPanel stops before writing to `public_html`. Check the GitHub Actions run for the checked-out commit, then retry **Deploy HEAD Commit** after that run succeeds. cPanel deployment logs are under `~/.cpanel/logs/`. [cPanel deployment troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/#deployment)

## Redirects

The deploy script writes `public_html/.htaccess` on every deployment, so add redirect rules to `scripts/deploy-cpanel.sh`. Changes made to that file in cPanel, including through its **Redirects** screen, are overwritten.

The script sends `www.felixbd.com` to `https://felixbd.com` with a 301 that keeps the path and query string. The rule takes effect once the `www` DNS record points to the web server and the SSL certificate covers `www`. After deploying, check it:

```bash
curl -sSL -o /dev/null -w '%{url_effective} %{http_code} %{num_redirects}\n' 'http://www.felixbd.com/contact/?solution=building-management'
```

The result should be the same path on `https://felixbd.com` with status 200.

## Roll back a release

For a regular update, revert the offending commit on GitHub `main`, wait for the revert’s build, then publish it from cPanel. For the original WordPress cutover, extract `~/felix-website-backups/legacy-public_html.zip` into a private directory and restore its `public_html/` contents, including `.htaccess`, to the document root. The existing WordPress database is required for that restore.
