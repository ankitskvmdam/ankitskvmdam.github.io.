#! /usr/bin/bash

# clean-jsdoc-theme
#-------------------
## first remove the exisiting copy
echo Removing the exising copy of clean-jsdoc-theme...
rm -rf ankdev/public/clean-jsdoc-theme

echo Cloning the new copy of clean-jsdoc-theme...
git clone --depth 1 --single-branch -b production https://github.com/ankitskvmdam/clean-jsdoc-theme.git ./ankdev/public/clean-jsdoc-theme

echo Removing unnecessary files...
cd ./ankdev/public/clean-jsdoc-theme && git filter-branch --subdirectory-filter demo/output

echo Removing git files of clean-jsdoc-theme...
rm -rf ./ankdev/public/clean-jsdoc-theme/.git
echo Removed.
#---------END--------