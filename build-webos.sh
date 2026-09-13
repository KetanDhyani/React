#!/bin/bash

# Build React app for WebOS TV
echo "Building React app for WebOS..."

# Build the React app
npm run build

# Remove old dist folder and copy the built files to WebOS directory
rm -rf webos/dist
cp -r dist webos/

echo "React app built and copied to webos directory"
echo "Next steps:"
echo "1. Create icon.png (80x80) and largeIcon.png (130x130) in webos/"
echo "2. Install webOS CLI: npm install -g @webosose/ares-cli"
echo "3. Build package: cd webos && ares-package ."
echo "4. Install to TV: ares-install --device <tv-ip> com.yourcompany.reactdemo_1.0.0_all.ipk"