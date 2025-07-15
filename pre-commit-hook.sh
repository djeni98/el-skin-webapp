#!/bin/sh

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".tsx\{0,1\}$")

if [[ "$STAGED_FILES" = "" ]]; then
    echo ""
    echo "There's no TSX files to check! Skipping ESLint..."
    echo ""
    exit 0
fi

npm run lint
if [[ "$?" == 0 ]]; then
    echo ""
    echo "✅  ESLint Passed! Commit can proceed :D"
    echo ""
    exit 0
else
    echo ""
    echo "❌  ESLint Failed! You cannot commit :("
    echo ""
    exit 1
fi