# Tizen TV App Setup

## Required Icons
Create the following icon file in this directory:

- `icon.png` - 512x512 pixel PNG icon for the app (Tizen requires high-resolution icons)

You can use any image editor to create this icon. For development, you can create a simple colored square with the React logo.

## Building and Deploying

1. Install Tizen Studio:
   - Download from https://developer.tizen.org/development/tizen-studio/download
   - Install the Tizen SDK and CLI tools

2. Install Tizen CLI packages:
   ```bash
   tizen install-cli
   ```

3. Build the Tizen package:
   ```bash
   tizen package -t wgt -s <your-certificate-profile> .
   ```

4. Connect your Tizen TV to the same network as your development machine

5. Enable Developer Mode on your TV:
   - Go to Settings > System > Developer Options
   - Enable Developer Mode
   - Enable USB Debugging

6. Install the app:
   ```bash
   tizen install -s <your-tv-ip> com.yourcompany.reactdemo.wgt
   ```

7. Launch the app:
   ```bash
   tizen run -s <your-tv-ip> com.yourcompany.reactdemo
   ```

## Configuration

Edit `config.xml` to customize:
- App ID and version
- Title and description
- Privileges and permissions
- Tizen profile settings

## Testing

Use the Tizen TV Emulator or a real Tizen TV device for testing.

## Certificate Setup

You need to create a certificate profile in Tizen Studio:
1. Open Tizen Studio
2. Go to Tools > Certificate Manager
3. Create a new certificate profile
4. Use the profile name in the build command