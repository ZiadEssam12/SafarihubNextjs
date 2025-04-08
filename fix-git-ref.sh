#!/bin/bash
# Script to fix corrupt main branch reference

# Get the latest commit hash
LATEST_COMMIT=$(git rev-list --all --max-count=1)

if [ -z "$LATEST_COMMIT" ]; then
  echo "No commits found in repository."
  echo "If this is a new repository, create an initial commit first:"
  echo "git add ."
  echo "git commit -m \"Initial commit\""
  exit 1
fi

echo "Found latest commit: $LATEST_COMMIT"
echo "Updating main branch reference..."

# Update the main branch reference
echo "$LATEST_COMMIT" > .git/refs/heads/main

echo "Main branch reference updated. Verify with:"
echo "git show-ref --heads main"