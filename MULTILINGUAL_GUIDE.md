# Multilingual Support - Driver Log Tracker Landing Page

🌍 The landing page now supports **English** and **Ukrainian** languages!

## Features

✅ Language switcher в navigation bar  
✅ Automatic language detection and saving (localStorage)  
✅ Smooth language switching without page reload  
✅ All content translated (headings, descriptions, buttons, footer)

## How It Works

### For Users

1. Open the website - default language is English
2. Click **EN** or **UA** buttons in the top navigation
3. Language preference is saved automatically
4. Next visit will remember your choice

### For Developers

#### Files Structure

```
├── index.html           # Main HTML with data-i18n attributes
├── translations.js      # Translation dictionary (EN + UK)
├── script.js           # Language switching logic
└── styles.css          # Language switcher styles
```

#### Adding New Language

1. **Add translations** in `translations.js`:

```javascript
const translations = {
  en: {
    /* existing */
  },
  uk: {
    /* existing */
  },
  nl: {
    // New language (Dutch example)
    'nav.launchApp': 'App starten',
    'hero.title.part1': 'Driver Log Tracker — Uw slimme assistent voor',
    // ... add all keys
  },
};
```

2. **Add language button** in `index.html`:

```html
<div class="language-switcher">
  <button class="lang-btn active" data-lang="en">EN</button>
  <button class="lang-btn" data-lang="uk">UA</button>
  <button class="lang-btn" data-lang="nl">NL</button>
  <!-- New -->
</div>
```

3. **That's it!** The system will automatically:
   - Display new language button
   - Switch content when clicked
   - Save user preference

#### Translation Keys Structure

All content uses `data-i18n` attributes:

```html
<h2 data-i18n="features.heading">Key Features</h2>
<p data-i18n="features.subheading">Everything you need...</p>
```

Translation keys follow this pattern:

```
section.subsection.element
```

Examples:

- `nav.launchApp` - Navigation button
- `hero.title.part1` - Hero section title (part 1)
- `features.regulation.title` - Feature card title
- `footer.copyright` - Footer copyright text

#### Special Cases

**Hero Title**: Handled separately to support highlighted text:

```javascript
// In translations.js
'hero.title.part1': 'Driver Log Tracker — Your Smart Assistant for',
'hero.title.highlight': 'Regulation 561',
'hero.title.part2': 'Compliance'

// Renders as:
// Driver Log Tracker — Your Smart Assistant for <span>Regulation 561</span> Compliance
```

**Buttons with icons**: Wrap text in `<span>`:

```html
<a class="btn-primary">
  <svg>...</svg>
  <span data-i18n="hero.cta.start">Start Calculating</span>
</a>
```

## Testing

1. **Desktop**: Open site, click EN/UA buttons in navbar
2. **Mobile**: Check responsive layout with language switcher
3. **Persistence**: Refresh page - language should remain
4. **Clear storage**: `localStorage.clear()` in console to reset

## Browser Compatibility

✅ All modern browsers (Chrome, Firefox, Safari, Edge)  
✅ localStorage support required  
✅ ES6 JavaScript features used

## Performance

- **Fast switching**: No page reload needed
- **Lightweight**: ~5KB translations file
- **Cached preference**: Instant load on return visits

## Current Languages

| Code | Language  | Status      |
| ---- | --------- | ----------- |
| `en` | English   | ✅ Complete |
| `uk` | Ukrainian | ✅ Complete |
| `nl` | Dutch     | ⏳ Planned  |

## Maintenance

When adding new content:

1. Add to HTML with `data-i18n="key.name"`
2. Add translations to `translations.js` for ALL languages
3. Test switching between languages
4. Verify special characters (é, ї, ü, etc.)

---

**Need help?** Contact: olekrumian@gmail.com
