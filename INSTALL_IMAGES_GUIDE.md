# Install PWA Section - Images Guide

## Overview

The Install PWA section requires 8 screenshot images to demonstrate installation steps for iOS and Android devices.

## Required Images

### iOS Installation (4 images)

Place these images in the `/images/` folder:

1. **install-ios-1.png**
   - Screenshot of dltracker.netlify.app open in Safari browser
   - Should show the full app interface in Safari
   - Recommended size: 375x812px (iPhone portrait)

2. **install-ios-2.png**
   - Screenshot showing the Safari Share button highlighted
   - The Share icon at the bottom of Safari browser
   - Recommended size: 375x812px

3. **install-ios-3.png**
   - Screenshot of Safari share menu with "Add to Home Screen" option visible
   - The "Add to Home Screen" option should be highlighted or clearly visible
   - Recommended size: 375x812px

4. **install-ios-4.png**
   - Screenshot of the "Add to Home" confirmation dialog
   - Shows the app icon, name field, and "Add" button
   - Recommended size: 375x812px

### Android Installation (4 images)

Place these images in the `/images/` folder:

1. **install-android-1.png**
   - Screenshot of dltracker.netlify.app open in Chrome browser
   - Should show the full app interface in Chrome
   - Recommended size: 360x800px (Android portrait)

2. **install-android-2.png**
   - Screenshot showing the Chrome three-dot menu button highlighted
   - The menu icon in the top right corner
   - Recommended size: 360x800px

3. **install-android-3.png**
   - Screenshot of Chrome menu with "Install app" or "Add to Home screen" option visible
   - The install option should be highlighted or clearly visible
   - Recommended size: 360x800px

4. **install-android-4.png**
   - Screenshot of the Chrome install confirmation dialog
   - Shows "Install" button and app details
   - Recommended size: 360x800px

## Image Specifications

### Format

- **File type**: PNG (preferred) or JPG
- **Transparency**: Not required, but acceptable for PNG

### Quality

- **Resolution**: High-quality screenshots (Retina/2x recommended)
- **File size**: Keep under 500KB per image for fast loading

### Styling Tips

1. Use device frames (optional) to make screenshots look more professional
2. Add highlights/circles to important UI elements (Share button, Menu, etc.)
3. Ensure good contrast and readability
4. Use consistent device mockups for all screenshots

## Image Optimization

Before adding images, optimize them:

```bash
# Using ImageOptim (macOS)
imageoptim images/install-*.png

# Or using command line tools
pngquant images/install-*.png --quality=65-80
```

## Alternative: Placeholder Images

If you don't have actual screenshots yet, you can create placeholder images with dimensions:

- iOS: 375x812px
- Android: 360x800px

Background color: `#1a1f3a` (matching app's dark theme)
Text overlay: Step description in white

## Testing

After adding images:

1. Clear browser cache
2. Reload the landing page
3. Check both iOS and Android tabs
4. Verify all images load correctly
5. Test on actual mobile devices for accurate representation

## Notes

- Images are lazy-loaded for better performance
- Alt text is automatically provided for accessibility
- Images are responsive and will scale on different screen sizes
- The install section is fully translated in 7 languages (EN, UA, PL, LT, FR, NL, CS)
