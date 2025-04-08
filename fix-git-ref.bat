@echo off
echo Fixing main branch reference...

REM Get the latest commit hash
for /f %%i in ('git rev-list --all --max-count=1') do set LATEST_COMMIT=%%i

if "%LATEST_COMMIT%"=="" (
  echo No commits found in repository.
  echo If this is a new repository, create an initial commit first:
  echo git add .
  echo git commit -m "Initial commit"
  exit /b 1
)

echo Found latest commit: %LATEST_COMMIT%
echo Updating main branch reference...

REM Update the main branch reference
echo %LATEST_COMMIT%> .git\refs\heads\main

echo Main branch reference updated. Verify with:
echo git show-ref --heads main