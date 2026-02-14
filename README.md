# DLTracker Landing Page

A modern, responsive landing page for DLTracker - the smart assistant for EU Regulation 561 compliance for professional truck drivers.

## 🚀 Quick Start

This is a static website that can be deployed to Netlify or any static hosting service.

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. That's it! No build process needed.

## 📁 Project Structure

```
DriverLog_web/
├── index.html          # Main landing page
├── styles.css          # All styling (includes dark theme)
├── script.js           # Interactive features & animations
├── images/             # App screenshots and images
│   ├── app-screenshot-1.jpg
│   ├── app-screenshot-2.jpg
│   ├── app-screenshot-3.jpg
│   ├── app-screenshot-4.jpg
│   └── app-screenshot-5.jpg
└── README.md          # This file
```

## 🖼️ Adding Screenshots

Add your app screenshots to the `images/` folder with these names:

- **app-screenshot-1.jpg** - Shift details with events (loading, unloading, pauses)
- **app-screenshot-2.jpg** - List of work days with driving statistics
- **app-screenshot-3.jpg** - Vehicle information and profile page
- **app-screenshot-4.jpg** - Statistics page showing work hours
- **app-screenshot-5.jpg** - Main screen with timer and rest counter

**Recommended image specifications:**

- Format: JPG or PNG
- Width: 400-600px (mobile screenshots)
- Height: Maintain original aspect ratio (approximately 800-1200px)
- Optimize for web (compress to reduce file size)

## 🎨 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Dark theme optimized for night driving
- ✅ Smooth scrolling and animations
- ✅ Fast loading (minimal dependencies)
- ✅ SEO-friendly structure
- ✅ Accessibility features
- ✅ No build process required

## 🌐 Deployment

### Netlify (Recommended)

1. Push this code to a GitHub repository
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

Your site will be live at `https://your-site-name.netlify.app`

### Alternative Hosting

This is a static site and works with any static hosting:

- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Push to `gh-pages` branch
- **Firebase Hosting**: Run `firebase deploy`
- **Surge**: Run `surge .`

## 🔧 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary-color: #00bcd4; /* Main brand color */
  --primary-dark: #0097a7; /* Darker shade */
  --primary-light: #b2ebf2; /* Lighter shade */
  /* ... more variables */
}
```

### Content

All content is in `index.html`. Search for specific sections:

- Hero section: `<header class="hero">`
- Features: `<section class="features">`
- How it works: `<section class="how-it-works">`
- Footer: `<footer class="footer">`

### Contact Information

Update these in `index.html`:

- Email: `olekrumian@gmail.com`
- App URL: `https://dltracker.netlify.app/`

## 📱 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA
2. **Problem & Solution** - Addresses pain points and offers solution
3. **Key Features** - Highlights main features (4 features)
4. **How It Works** - 3-step process explanation
5. **Technical Advantages** - Why choose DLTracker (4 advantages)
6. **Visual Showcase** - Screenshot gallery
7. **Final CTA** - Call-to-action before footer
8. **Footer** - Contact info and links

## 🌍 Internationalization (Future)

Currently in English. To add more languages:

1. Create language versions: `index.html`, `index-nl.html`, `index-uk.html`
2. Add language switcher in navigation
3. Use JavaScript to switch content dynamically
4. Consider using i18n library for complex translations

## 📊 Analytics (Optional)

To add Google Analytics or other tracking:

1. Add tracking script to `<head>` in `index.html`
2. Button clicks are already logged in `script.js` (see console)
3. Customize event tracking in `script.js`

## 🎯 SEO Optimization

Included features:

- Meta description
- Semantic HTML structure
- Alt text for images (add when you add screenshots)
- Fast loading time
- Mobile-responsive

To improve further:

- Add `robots.txt`
- Add `sitemap.xml`
- Add Open Graph tags for social sharing
- Add structured data (JSON-LD)

## 📝 License

Created for DLTracker. All rights reserved.

## 👨‍💻 Developer

**Contact**: olekrumian@gmail.com  
**App URL**: [dltracker.netlify.app](https://dltracker.netlify.app/)

---

Built with ❤️ for professional drivers
