# WebOS TV App Setup

## Required Icons
Create the following icon files in this directory:

- `icon.png` - 80x80 pixel PNG icon for the app
- `largeIcon.png` - 130x130 pixel PNG icon for larger displays

You can use any image editor to create these icons. For development, you can create simple colored squares with the React logo.

## Building and Deploying

1. Install webOS CLI tools:
   ```bash
   npm install -g @webosose/ares-cli
   ```

2. Build the webOS package:
   ```bash
   ares-package .
   ```

3. Connect your webOS TV to the same network as your development machine

4. Enable Developer Mode on your TV:
   - Press the "Home" button on your remote
   - Go to Settings > General > About This TV
   - Enter the code: 0411 (or check webOS documentation for current code)
   - Enable Developer Mode

5. Install the app:
   ```bash
   ares-install --device <your-tv-ip> com.yourcompany.reactdemo_1.0.0_all.ipk
   ```

6. Launch the app:
   ```bash
   ares-launch --device <your-tv-ip> com.yourcompany.reactdemo
   ```

## Configuration

Edit `appinfo.json` to customize:
- App ID and version
- Title and description
- Icon colors
- Permissions

## Testing

Use the webOS TV Simulator or a real webOS TV device for testing.