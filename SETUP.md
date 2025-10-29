# Pezza Theme - Setup & Deployment Guide

## Quick Start

### 1. **No Build Required** (Fastest)
Simply link the CSS and start using classes:
```html
<link rel="stylesheet" href="css/theme.css" />
<button class="btn btn-primary">Click me</button>
```

### 2. **With Tailwind Build** (Recommended for custom projects)

```bash
# Install dependencies
npm install

# Development - watch for changes
npm run dev

# Production build - minified
npm run build

# Serve locally
npm run serve
```

## Using in Other Projects

### Copy These Files:
```
✓ theme.json              # Design tokens
✓ tailwind.config.js      # Tailwind config
✓ css/theme.css           # Compiled styles
✓ package.json            # Dependencies
```

### Then Link in Your Project:

**HTML:**
```html
<link rel="stylesheet" href="/path/to/theme.css" />
```

**React:**
```javascript
import '/path/to/theme.css';
```

**Angular (angular.json):**
```json
"styles": ["path/to/theme.css"]
```

**Vue:**
```javascript
import '/path/to/theme.css';
```

## Customize Colors

### Method 1: Edit theme.json
```json
{
  "colors": {
    "primary": "#your-color",
    "secondary": "#your-color"
  }
}
```
Then rebuild CSS.

### Method 2: Edit tailwind.config.js
```javascript
colors: {
  primary: {
    500: "#your-color"
  }
}
```
Then rebuild CSS.

### Rebuild CSS:
```bash
npm run build
```

## Color Palette

- **Primary:** #ff6b35 (Orange) - Main action color
- **Secondary:** #004e89 (Blue) - Secondary color
- **Success:** #10b981 (Green) - Success messages
- **Danger:** #ef4444 (Red) - Error messages
- **Warning:** #f59e0b (Amber) - Warnings

## Available Classes

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>
```

### Cards
```html
<div class="card">Static card</div>
<div class="card card-hover">Hover effects</div>
```

### Forms
```html
<label class="label">Field Label</label>
<input class="input-field" type="text" />
<textarea class="input-field"></textarea>
```

### Alerts
```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-danger">Error message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-info">Info message</div>
```

### Layout
```html
<div class="container-responsive">Centered container</div>
<div class="grid-responsive">3-column responsive grid</div>
```

## Tailwind Classes

This theme includes full Tailwind CSS support:

```html
<!-- Spacing -->
<div class="p-4 m-2 mb-8">Padding & margins</div>

<!-- Text -->
<h1 class="text-4xl font-bold text-gray-900">Heading</h1>
<p class="text-sm text-gray-600">Subtext</p>

<!-- Colors -->
<div class="bg-orange-500 text-white">Colored box</div>

<!-- Responsive -->
<div class="w-full md:w-1/2 lg:w-1/3">Responsive</div>

<!-- Interactive -->
<button class="hover:bg-orange-600 focus:ring-2 transition-all">Button</button>
```

See [Tailwind Docs](https://tailwindcss.com/docs) for complete reference.

## Responsive Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## Dark Mode

Dark mode is auto-enabled. To force it:

```html
<html class="dark">
```

Dark styles are automatically applied to `.card`, `.input-field`, and other elements.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Minify CSS** - Use `npm run build` for production
2. **Remove unused CSS** - Tailwind automatically purges unused classes
3. **Lazy load images** - Use `loading="lazy"` on images
4. **Use semantic HTML** - Improves accessibility and SEO

## Troubleshooting

### Styles not applying?
1. Check CSS file is linked correctly
2. Ensure file path is correct
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check console for errors

### Colors not updating after rebuild?
1. Rebuild CSS: `npm run build`
2. Clear browser cache
3. Check tailwind.config.js for syntax errors

### Grid not responsive?
- Use `grid-responsive` class
- Or manually use Tailwind: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Project Structure

```
Theme/
├── theme.json                    # Design tokens
├── tailwind.config.js            # Tailwind config
├── package.json                  # NPM scripts
├── index.html                    # Example page
├── components-examples.html      # Component examples
├── css/
│   ├── theme.css                # Main stylesheet
│   └── bootstrap.min.css        # (Legacy)
├── js/
│   ├── index.js                 # Form handling
│   └── bootstrap.bundle.min.js  # (Legacy)
└── images/                       # Assets
```

## Next Steps

1. ✅ Copy theme files to your project
2. ✅ Link CSS in your HTML
3. ✅ Customize colors in `theme.json`
4. ✅ Use component classes from this guide
5. ✅ Test on mobile and desktop

## Support

For issues or questions, refer to:
- [Tailwind CSS Docs](https://tailwindcss.com)
- `components-examples.html` for component examples
- `index.html` for a complete working example

---

**Version:** 2.0.0 | Made with Tailwind CSS
