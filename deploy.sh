#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"

  ssh-add ~/.ssh/id_rsa

  cd build

  git init
  git remote add origin git@rnkp.org:/home/git/rnkp
  git config --global user.email "build@travis-ci.org"
  git add .
  git commit -m 'deploy'
  git push --force origin master
else
  echo "Not deploying, since this branch isn't master."
fi
