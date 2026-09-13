# ReactDemo - Smart TV Deployment Guide

This guide explains how to deploy your React application to WebOS (LG) and Tizen (Samsung) smart TV platforms.

## Project Structure

```
ReactDemo/
├── src/              # React source code
├── dist/             # Production build output
├── webos/            # WebOS TV configuration and build
│   ├── appinfo.json  # WebOS app manifest
│   ├── services.json # WebOS services configuration
│   ├── dist/         # Built React app for WebOS
│   └── README.md     # WebOS-specific instructions
├── tizen/            # Tizen TV configuration and build
│   ├── config.xml    # Tizen app manifest
│   ├── manifest      # Tizen legacy manifest
│   ├── dist/         # Built React app for Tizen
│   └── README.md     # Tizen-specific instructions
├── build-webos.sh    # Script to build for WebOS
└── build-tizen.sh    # Script to build for Tizen
```

## Quick Start

### Build for Both Platforms
```bash
npm run build:all
```

### Build for WebOS Only
```bash
npm run build:webos
# or
./build-webos.sh
```

### Build for Tizen Only
```bash
npm run build:tizen
# or
./build-tizen.sh
```

## WebOS (LG TV) Deployment

### Prerequisites
1. Install webOS CLI tools:
   ```bash
   npm install -g @webosose/ares-cli
   ```

2. Create required icons in `webos/` directory:
   - `icon.png` - 80x80 pixel PNG
   - `largeIcon.png` - 130x130 pixel PNG

### Build and Package
```bash
cd webos
ares-package .
```

This creates an `.ipk` file (e.g., `com.yourcompany.reactdemo_1.0.0_all.ipk`).

### Install to TV
1. Enable Developer Mode on your LG TV:
   - Press "Home" button on remote
   - Go to Settings > General > About This TV
   - Enter code: 0411 (or check webOS documentation)
   - Enable Developer Mode
   - Note the TV's IP address

2. Install the app:
   ```bash
   ares-install --device <tv-ip> com.yourcompany.reactdemo_1.0.0_all.ipk
   ```

3. Launch the app:
   ```bash
   ares-launch --device <tv-ip> com.yourcompany.reactdemo
   ```

### WebOS Configuration
Edit `webos/appinfo.json` to customize:
- App ID (`com.yourcompany.reactdemo`)
- Version number
- Title and description
- Icon colors
- Permissions

## Tizen (Samsung TV) Deployment

### Prerequisites
1. Install Tizen Studio:
   - Download from https://developer.tizen.org/development/tizen-studio/download
   - Install Tizen SDK and CLI tools

2. Install Tizen CLI packages:
   ```bash
   tizen install-cli
   ```

3. Create required icon in `tizen/` directory:
   - `icon.png` - 512x512 pixel PNG

4. Create a certificate profile in Tizen Studio:
   - Open Tizen Studio
   - Go to Tools > Certificate Manager
   - Create a new certificate profile
   - Note the profile name

### Build and Package
```bash
cd tizen
tizen package -t wgt -s <your-certificate-profile> .
```

This creates a `.wgt` file (e.g., `com.yourcompany.reactdemo.wgt`).

### Install to TV
1. Enable Developer Mode on your Samsung TV:
   - Go to Settings > System > Developer Options
   - Enable Developer Mode
   - Enable USB Debugging
   - Note the TV's IP address

2. Install the app:
   ```bash
   tizen install -s <tv-ip> com.yourcompany.reactdemo.wgt
   ```

3. Launch the app:
   ```bash
   tizen run -s <tv-ip> com.yourcompany.reactdemo
   ```

### Tizen Configuration
Edit `tizen/config.xml` to customize:
- App ID and version
- Title and description
- Privileges and permissions
- Tizen profile settings

## Testing

### WebOS Testing
- Use webOS TV Simulator (available with webOS SDK)
- Test on real LG TV hardware
- Use `ares-inspect` for debugging

### Tizen Testing
- Use Tizen TV Emulator (available with Tizen Studio)
- Test on real Samsung TV hardware
- Use Tizen Studio debugging tools

## Development Workflow

1. Make changes to React source code
2. Test locally: `npm run dev`
3. Build for TV platforms: `npm run build:all`
4. Package and deploy to desired platform
5. Test on TV or emulator

## Troubleshooting

### Common Issues

**Build fails:**
- Ensure all dependencies are installed: `npm install`
- Check that build scripts have execute permissions

**TV won't install app:**
- Verify TV and development machine are on same network
- Check Developer Mode is enabled on TV
- Ensure certificate/profile is valid (Tizen)

**App crashes on TV:**
- Check console logs using platform debugging tools
- Ensure TV has sufficient memory/performance
- Test with simpler content first

**Navigation issues:**
- Smart TVs require keyboard/remote navigation
- Consider adding TV-specific navigation controls
- Test with TV remote, not mouse

## Platform-Specific Considerations

### WebOS
- Supports webOS 3.0+
- Best performance on newer LG TV models
- Uses webOS-specific APIs for enhanced features

### Tizen
- Supports Tizen 3.0+
- Best performance on newer Samsung TV models
- Uses Tizen-specific APIs for enhanced features

## Performance Optimization

- Minimize bundle size (already optimized by Vite)
- Avoid heavy animations and transitions
- Use TV-optimized fonts and layouts
- Test on actual TV hardware for performance

## Additional Resources

- [webOS TV Developer Portal](https://webostv.developer.lge.com/)
- [Tizen TV Developer Portal](https://developer.tizen.org/development/tizen-studio/tv-application)
- [React TV Navigation Guide](https://github.com/parsec-px/parsec-cloud)