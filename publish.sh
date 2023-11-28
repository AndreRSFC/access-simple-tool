#!/bin/bash

# Exit script if any command fails
set -e

# Optional: Run your tests here
# npm run test

# Update package version
# Use npm version patch, minor, or major as needed
echo "Updating package version..."
npm version patch

# Build your package
# This step depends on your build setup
echo "Building the package..."
npm run build

# Optional: Commit and push changes to Git
echo "Committing changes to Git..."
git add .
git commit -m "Bump version"
git push

# Publish to NPM
echo "Publishing to NPM..."
npm publish

echo "Publishing complete!"
