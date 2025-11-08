#!/bin/bash
cd "$(dirname "$0")/.."
git add .
if ! git diff --cached --quiet; then
  msg="Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"
  git commit -m "$msg" >/dev/null 2>&1
  git push origin main >/dev/null 2>&1
  echo "✅ Auto-commit pushed at $(date '+%H:%M:%S')"
else
  echo "⚙️ No changes to commit"
fi