# Connect Project to GitHub and Verify Remote

## Goal
Connect this Lovable project to your GitHub account for two-way Git sync, then confirm the repository was created and the git remote points to github.com.

## Steps

1. Open the Lovable editor for this project.
2. Click the **Plus (+)** menu in the chat input (bottom left).
3. Select **GitHub → Connect project**.
4. Authorize the Lovable GitHub App when prompted.
5. Choose the GitHub account/organization where the repository should live.
6. Click **Create Repository** to push the current codebase to GitHub.
7. After the repository is created, verify the git remote by running:

```text
git remote -v
```

The output should show `origin` pointing to a URL like:

```text
https://github.com/<your-username>/<repo-name>.git
```

## Outcome
- A new GitHub repository is created with the project code.
- The `origin` remote points to `github.com`.
- Future edits in Lovable push to GitHub automatically.
- Pushes to GitHub sync back to Lovable.

## Note
GitHub authorization must be completed interactively in the Lovable UI. The agent cannot perform this authorization step automatically.