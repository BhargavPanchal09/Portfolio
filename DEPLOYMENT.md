# Free hosting with GitHub Pages

Expected address after successful deployment:
https://bhargavpanchal09.github.io/Portfolio/

## One-time setup

1. Push the current portfolio source and `.github/workflows/deploy.yml` to the `main` branch of `BhargavPanchal09/Portfolio`.
2. Open https://github.com/BhargavPanchal09/Portfolio/settings/pages .
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the repository's **Actions** tab. Select **Deploy portfolio to GitHub Pages** and run it against `main` if it has not started automatically.
5. Wait for both the build and deploy jobs to turn green. Open the URL shown by the deployment.

The workflow builds with `/Portfolio/` as Vite's base so scripts, styles, and the favicon resolve correctly. Normal `npm run dev` continues to work at the local root. Future pushes to `main` rebuild and publish automatically.

## Keep it online

GitHub Pages supports public repositories on GitHub Free. Keep the account and repository available, avoid renaming the repository without updating the build base, and stay within the provider's usage rules. There is no purchased domain to renew. No hosting provider guarantees indefinite availability or unchanged free-plan terms.

The website is static: visitors do not need your computer to be running. Email links open Gmail or the visitor's email application. External fonts and the statue image still depend on their original hosts.

Official documentation:
- https://docs.github.com/en/pages/getting-started-with-github-pages
- https://vite.dev/guide/static-deploy#github-pages
