# Git sharing and near-real-time sync

Git is not true live editing like Google Docs. The practical workflow is:

1. Save files.
2. Commit local changes.
3. Push to the shared remote.
4. The other person pulls the latest changes.

This project includes scripts to make that workflow close to real time.

## Recommended remote setup

Create a GitHub repository, invite the other person, then set the remote:

```powershell
git config user.name "Your Name"
git config user.email "you@example.com"
git remote set-url origin https://github.com/YOUR_NAME/YOUR_REPO.git
git push -u origin master
```

The other person clones it:

```powershell
git clone https://github.com/YOUR_NAME/YOUR_REPO.git
```

## Sync once

Run this from the repository root:

```powershell
.\tsurusen-amusement-bar\scripts\git-sync-once.ps1
```

This will:

- pull the latest remote changes with rebase
- stage this project only
- commit local changes when needed
- push to `origin`

## Keep syncing

Run this while working:

```powershell
.\tsurusen-amusement-bar\scripts\git-sync-watch.ps1 -IntervalSeconds 30
```

The script retries every 30 seconds. Stop it with `Ctrl+C`.

## Conflict rule

If both people edit the same lines, Git may stop with a conflict. Resolve the conflict, then run:

```powershell
git add -A
git rebase --continue
git push
```

For internet sharing, use GitHub/GitLab/Bitbucket. For LAN-only sharing, a shared bare repository can work, but GitHub is safer for two-way collaboration.
