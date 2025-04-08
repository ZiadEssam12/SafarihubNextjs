@echo off
echo Diagnosing Git repository issues...

echo.
echo === REPOSITORY STATUS ===
echo.

echo Checking if .git directory exists:
if exist ".git" (
  echo .git directory found
) else (
  echo ERROR: .git directory not found - this may not be a Git repository
  exit /b 1
)

echo.
echo Checking HEAD reference:
if exist ".git\HEAD" (
  echo HEAD file exists. Contents:
  type .git\HEAD
) else (
  echo ERROR: HEAD file missing
  echo Creating HEAD file pointing to main branch...
  echo ref: refs/heads/main> .git\HEAD
)

echo.
echo Checking for commits:
git rev-parse --verify HEAD >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  for /f %%i in ('git rev-parse HEAD') do set CURRENT_COMMIT=%%i
  echo Found HEAD commit: %CURRENT_COMMIT%
) else (
  echo No HEAD commit found. This may be a new repository.
)

echo.
echo === FIXING REFERENCES ===
echo.

echo Step 1: Ensuring refs/heads directory exists
if not exist ".git\refs\heads" mkdir ".git\refs\heads"

echo Step 2: Checking main branch reference
if exist ".git\refs\heads\main" (
  echo main branch file exists. Contents:
  type .git\refs\heads\main
) else (
  echo main branch reference missing, attempting to create it...
  
  git rev-list --all --max-count=1 >nul 2>&1
  if %ERRORLEVEL% EQU 0 (
    for /f %%i in ('git rev-list --all --max-count=1') do set LATEST_COMMIT=%%i
    echo Found latest commit: %LATEST_COMMIT%
    echo %LATEST_COMMIT%> .git\refs\heads\main
    echo Created main branch reference with latest commit
  ) else (
    echo No commits found. If this is a new repository, create an initial commit first:
    echo git add .
    echo git commit -m "Initial commit"
  )
)

echo.
echo === NEXT STEPS ===
echo.
echo Try your Git operations again. If issues persist, you may need to:
echo 1. Create an initial commit if none exists
echo 2. Set up a new repository with "git init" and copy your files
echo.
echo You can also try fixing HEAD with these commands:
echo git symbolic-ref HEAD refs/heads/main
echo git reset --mixed