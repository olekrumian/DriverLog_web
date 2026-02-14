# Add Logo File

You need to add the logo file to the root of the project:

## Required File

**File name:** `web-app-manifest-192x192.png`  
**Location:** Root directory (same level as `index.html`)

```
DriverLog_web/
├── index.html
├── styles.css
├── script.js
├── web-app-manifest-192x192.png  ← Add this file here
├── images/
└── ...
```

## Logo Specifications

- **Size**: 192x192 pixels (or larger, will be scaled)
- **Format**: PNG with transparency preferred
- **Design**: Your DLTracker logo/icon
- **Style**: Should work well with dark theme

## Where to Get the File

If you have the DLTracker app's icon/logo, save it as `web-app-manifest-192x192.png` in the project root.

The logo will appear in:

- Navigation bar (top left)
- Footer

## Alternative: Use SVG Temporarily

If you don't have the PNG file yet, you can keep the current SVG logo by reverting the logo changes in `index.html`, or create a simple PNG placeholder at 192x192px with your brand colors.
