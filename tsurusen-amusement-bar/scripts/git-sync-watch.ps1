param(
  [int]$IntervalSeconds = 30,
  [string]$Branch = "master"
)

$ErrorActionPreference = "Continue"
$syncScript = Join-Path $PSScriptRoot "git-sync-once.ps1"

Write-Host "Watching Git changes. Press Ctrl+C to stop."
Write-Host "Branch: $Branch"
Write-Host "Interval: $IntervalSeconds seconds"

while ($true) {
  try {
    & $syncScript -Branch $Branch
  } catch {
    Write-Warning $_.Exception.Message
    Write-Warning "Sync paused for this cycle. Resolve conflicts or remote issues, then it will retry."
  }

  Start-Sleep -Seconds $IntervalSeconds
}
