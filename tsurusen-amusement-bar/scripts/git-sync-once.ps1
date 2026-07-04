param(
  [string]$Branch = "master",
  [string]$Message = "",
  [switch]$NoPull
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($GitArgs -join ' ') failed with exit code $LASTEXITCODE"
  }
}

$repoRoot = (& git rev-parse --show-toplevel).Trim()
if (-not $repoRoot) {
  throw "This script must be run inside a Git repository."
}

Set-Location $repoRoot

$remoteUrl = (& git remote get-url origin 2>$null)
if ($LASTEXITCODE -ne 0 -or -not $remoteUrl) {
  throw "Remote 'origin' is not configured. Set it first with: git remote add origin <repository-url>"
}

$userName = (& git config user.name 2>$null)
$userEmail = (& git config user.email 2>$null)
if (-not $userName -or -not $userEmail) {
  throw "Git user is not configured. Run: git config user.name `"Your Name`"; git config user.email `"you@example.com`""
}

if (-not $NoPull) {
  Invoke-Git pull --rebase --autostash origin $Branch
}

Invoke-Git add -A -- .gitignore tsurusen-amusement-bar

$pending = (& git status --porcelain)
if ($pending) {
  if (-not $Message) {
    $Message = "sync: " + (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
  }
  Invoke-Git commit -m $Message
} else {
  Write-Host "No local changes to commit."
}

Invoke-Git push origin $Branch
Write-Host "Synced $Branch to origin."
