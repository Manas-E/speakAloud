#!/bin/bash
# post-pull.sh:    Armen Rostamian
# last modified:  2022-08-22

set -euo pipefail

echo "Post-pull script running at $(date +%s)!"

# These are here in case you are using a monorepo or have some kind of custom/funky directory structure set up
# and need a way to automatically obtain the necessary absolute paths to any specific app-related files

ROOT_PATH=$(jq <amplify/.config/local-env-info.json -r .projectPath)
APP_REL_PATH=$(jq <amplify/.config/project-config.json -r .javascript.config.SourceDir)
FULL_PATH=$ROOT_PATH/$APP_REL_PATH

# this file *would* be created as the original copy of the package.json by the pre-pull.sh script
PRE_PULL_PACKAGE_JSON="package.json.amplify-pre-pull"

if [ -f ${PRE_PULL_PACKAGE_JSON} ]; then
  echo "    Restoring package.json"
  mv ${PRE_PULL_PACKAGE_JSON} package.json
fi
