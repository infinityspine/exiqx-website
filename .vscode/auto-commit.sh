#!/bin/bash
# === ExIQx Auto Commit Script ===
# Automatically commits and pushes changes every 5 minutes
# Author: Dr. John Thoma — ExIQx Performance

while true; do
  cd "$(dirname "$0")/.."  # Move to project root

  # Stage all changes
  git add .

  # Commit with timestamp
  git commit -m "🕒 Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')" > /dev/null 2>&1

  # Push to GitHub
  git push origin main > /dev/null 2>&1

  # macOS notification
  osascript -e 'display notification "Changes auto-committed and pushed to GitHub ✅" with title "ExIQx Auto Commit"'

  # Wait 5 minutes (300 seconds)
  sleep 300
done