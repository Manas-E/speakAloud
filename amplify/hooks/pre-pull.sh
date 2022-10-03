#!/bin/bash
# !!Note: SCRIPT RUNS IN REPO ROOT! All relative path references should be handled as such!
# pre-pull.sh:    Armen Rostamian
# last modified:  2022-08-22

set -euo pipefail

# These are here in case you are using a monorepo or have some kind of custom/funky directory structure set up
# and need a way to automatically obtain the necessary absolute paths to any specific app-related files

ROOT_PATH=$(jq <amplify/.config/local-env-info.json -r .projectPath)
APP_REL_PATH=$(jq <amplify/.config/project-config.json -r .javascript.config.SourceDir)
FULL_PATH=$ROOT_PATH/$APP_REL_PATH

echo "Pre-pull script running at $(date +%s)!"

PRE_PULL_PACKAGE_JSON="package.json.amplify-pre-pull"

echo "    Stashing package.json"
cp package.json ${PRE_PULL_PACKAGE_JSON}

echo "    Removing type: module and writing modified package.json"
jq -c 'del(.type)' ${PRE_PULL_PACKAGE_JSON} > package.json