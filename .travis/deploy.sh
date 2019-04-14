#!/bin/bash

# print outputs and exit on first failure
set -xe

if [ $TRAVIS_BRANCH == "master" ] ; then

    # setup ssh agent, git config and remote
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/travis_rsa
    git remote add deploy "travis@rnk.party:/var/www/rnk.party"
    git config user.name "Travis CI"
    git config user.email "travis@gmail.com"

    # commit compressed files and push it to remote
    git add .
    git status
    git commit -m "Deploy"
    git push --force deploy master

else

    echo "No deploy script for branch '$TRAVIS_BRANCH'"

fi