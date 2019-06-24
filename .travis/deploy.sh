#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  cd build
  git init

  git remote add deploy "travis@website.com:/rnkp/rnkp2"
  git config user.name "Travis CI"
  git config user.email "rnk.program@gmail.com+travis@gmail.com"

  git add .
  git commit -m "Deploy"
  git push --force deploy master
else
  echo "Not deploying, since this branch isn't master."
fi
