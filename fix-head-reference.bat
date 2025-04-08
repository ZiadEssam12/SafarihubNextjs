@echo off
echo Fixing HEAD reference issue...

echo.
echo Step 1: Checking current HEAD status
if exist ".git\HEAD" (
  echo Current HEAD content:
  type .git\HEAD
) else (
  echo HEAD file doesn't exist, creating it...
  echo ref: refs/heads/main> .git\HEAD
  echo Created HEAD file pointing to main branch
)

echo.
echo Step 2: Ensuring main branch reference exists
if not exist ".git\refs\heads" mkdir ".git\refs\heads"

echo.
echo Step 3: Fixing HEAD to point to main branch
echo ref: refs/heads/main> .git\HEAD
echo Updated HEAD to point to main branch

echo.
echo Step 4: Creating initial commit if needed
git rev-parse --verify HEAD >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo No commits found. Creating initial empty commit...
  git commit --allow-empty -m "Initial commit"
  echo Created initial commit
)

echo.
echo Step 5: Verifying HEAD reference
git rev-parse --verify HEAD >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  echo SUCCESS: HEAD is now a valid reference
  echo HEAD points to:
  git rev-parse HEAD
) else (
  echo ERROR: HEAD reference still not valid
  echo You may need to create a new repository and copy your files over
)

echo.
echo If the issue is fixed, try your Git operations again.
echo If issues persist, you might need to:
echo 1. Run: git symbolic-ref HEAD refs/heads/main
echo 2. Run: git reset --mixed
echo 3. Create a new repository and copy your files over