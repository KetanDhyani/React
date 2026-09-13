#!/bin/bash

# Build React app for Tizen TV
echo "Building React app for Tizen..."

# Build the React app
npm run build

# Remove old dist folder and copy the built files to Tizen directory
rm -rf tizen/dist
cp -r dist tizen/

echo "React app built and copied to tizen directory"
echo "Next steps:"
echo "1. Create icon.png (512x512) in tizen/"
echo "2. Install Tizen Studio and CLI tools"
echo "3. Build package: cd tizen && tizen package -t wgt -s <cert-profile> ."
echo "4. Install to TV: tizen install -s <tv-ip> com.yourcompany.reactdemo.wgt"