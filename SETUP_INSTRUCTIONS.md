# DLTracker Landing Page - Screenshot Setup Instructions

## 📸 Adding Your Screenshots

You have 5 screenshots from your app that need to be saved in the `images/` folder.

### Step-by-Step Instructions:

1. **Locate the screenshots** you provided (the 5 images of your DLTracker app)

2. **Save each screenshot** to the `images/` folder with these exact names:
   - **Shift details screen** (the one showing events timeline) → `app-screenshot-1.jpg`
   - **Data list screen** (showing multiple days with stats) → `app-screenshot-2.jpg`
   - **Profile/Vehicle screen** (showing vehicle information) → `app-screenshot-3.jpg`
   - **Statistics screen** (showing current week stats) → `app-screenshot-4.jpg`
   - **Main timer screen** (showing 00:00:00 timer) → `app-screenshot-5.jpg`

3. **Optional: Optimize images** before adding them:
   - Visit [TinyPNG.com](https://tinypng.com)
   - Upload each screenshot
   - Download the compressed version
   - This reduces file size without visible quality loss

### Screenshot Mapping (from your provided images):

```
Your Screenshot → Save As
─────────────────────────────────────────
Image 1 (shift timeline) → app-screenshot-1.jpg
Image 2 (data list view) → app-screenshot-2.jpg
Image 3 (profile page)   → app-screenshot-3.jpg
Image 4 (statistics)     → app-screenshot-4.jpg
Image 5 (main timer)     → app-screenshot-5.jpg
```

## 🚀 After Adding Screenshots

1. **Test locally**: Open `index.html` in a browser to verify images load correctly
2. **Commit to Git**:
   ```bash
   git add .
   git commit -m "Add landing page with screenshots"
   git push
   ```
3. **Deploy to Netlify**: Follow deployment instructions in README.md

## ✅ Verification Checklist

- [ ] All 5 screenshots saved in `images/` folder
- [ ] Filenames match exactly (case-sensitive)
- [ ] Images are optimized (<200KB each ideally)
- [ ] Local preview shows all images correctly
- [ ] Screenshots show app's key features clearly

## 🎨 Alternative: Use Placeholders First

If you want to deploy immediately without screenshots:

1. Use placeholder image service in `index.html`
2. Replace image paths temporarily:
   ```html
   <img
     src="https://via.placeholder.com/400x800/0A0E27/00BCD4?text=DLTracker"
     alt="..."
   />
   ```
3. Replace with real screenshots later

## 📱 Recommended Image Specs

- **Format**: JPG (better compression for phone screenshots)
- **Width**: 400-600px (mobile device width)
- **Height**: Keep original aspect ratio (~800-1300px for phone screens)
- **Quality**: 80-85% JPEG quality is optimal
- **File Size**: Target <150KB per image

## 🛠️ Quick Commands

**From project root:**

```bash
# Check if images exist
ls -lh images/

# See total image folder size
du -sh images/

# Count images
ls images/*.jpg | wc -l
```

---

**Need help?** Contact: olekrumian@gmail.com
