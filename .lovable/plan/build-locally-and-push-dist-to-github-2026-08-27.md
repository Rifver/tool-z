# Build Locally and Push dist to GitHub

## Goal
Run `npm run build` in this project, then commit and push the resulting `dist/` folder to the connected GitHub repository.

## Prerequisites

1. Confirm the project is actually connected to GitHub.
2. The `origin` remote must point to a `github.com` URL.

## Steps

1. Re-verify the git remote:

```text
git remote -v
```

If `origin` still points to `lovable-gcp.code.storage`, the GitHub connection has not propagated to this workspace yet. In that case, re-run the Lovable GitHub connection flow:

- Lovable editor → Plus (+) → GitHub → Connect project
- Authorize the Lovable GitHub App
- Choose account/organization
- Click **Create Repository**

2. Once `origin` shows `https://github.com/<user>/<repo>.git`, run the build:

```text
npm run build
```

3. Ensure `dist/` is not ignored by git. If `.gitignore` contains `dist/`, remove or comment that line.

4. Stage, commit, and push the build output:

```text
git add dist/
git commit -m "Build output for deployment"
git push origin main
```

## Outcome
- The project builds successfully.
- The `dist/` folder is committed and pushed to the GitHub repository.
- The GitHub repository contains the deployable build artifacts.

## Note
This plan requires the GitHub remote to be present. If the remote is still Lovable-only, the connection step must be completed or retried first.