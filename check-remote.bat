@echo off
echo Checking Git remote configuration...
echo.

echo Current remote repositories:
git remote -v

echo.
echo Remote branch tracking information:
git branch -vv

echo.
echo If you need to update your remote URL after changing visibility:
echo git remote set-url origin YOUR_NEW_REPOSITORY_URL