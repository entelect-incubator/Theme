# Using Pezza Theme in Other Incubator Projects

This theme is designed to be **copied and reused** across all Incubator projects. Follow this guide to integrate it into your project.

## 🎯 Quick Copy-Paste

### Step 1: Copy Theme Files
```bash
# From your project root
cp -r ../Theme/css ./
cp -r ../Theme/js ./
cp ../Theme/tailwind.config.js ./
cp ../Theme/theme.json ./
cp ../Theme/email-template.html ./
```

### Step 2: Add to HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Belleza:wght@400&family=Cookie:wght@400&display=swap" rel="stylesheet" />
  
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Theme CSS -->
  <link rel="stylesheet" href="./css/theme.css" />
</head>
<body>
  <!-- Your content -->
  
  <!-- Scripts -->
  <script src="./js/theme.js"></script>
  <script src="./js/index.js"></script>
</body>
</html>
```

### Step 3: Use Components
```html
<!-- Hero Section -->
<div class="hero-video">
  <video autoplay muted loop playsinline>
    <source src="./your-video.mp4" type="video/mp4" />
  </video>
  <div class="hero-overlay">
    <h1 class="text-white text-6xl">Your Title</h1>
  </div>
</div>

<!-- Menu/Grid -->
<section class="section bg-light-bg dark:bg-dark-bg">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card-hover">
      <h3>Item 1</h3>
    </div>
    <div class="card-hover">
      <h3>Item 2</h3>
    </div>
  </div>
</section>
```

Done! Your project now has the modern theme. ✅

---

## 📁 Project Structure

After copying, your project should look like:

```
your-incubator-project/
├── css/
│   ├── theme.css
│   └── theme.min.css
├── js/
│   ├── theme.js
│   └── index.js
├── images/
│   └── your-images.png
├── videos/
│   └── your-video.mp4
├── index.html
├── email-template.html
├── tailwind.config.js
├── theme.json
└── README.md
```

---

## 🎨 Customization

### Change Brand Colors

1. **Update tailwind.config.js**
```javascript
colors: {
  primary: {
    500: '#your-primary-color',
    700: '#your-primary-dark'
  },
  secondary: {
    500: '#your-secondary-color'
  }
}
```

2. **Update theme.json**
```json
{
  "colors": {
    "primary": {
      "500": "#your-primary-color"
    },
    "secondary": {
      "500": "#your-secondary-color"
    }
  }
}
```

3. **Update CSS variables**
```css
:root {
  --color-primary: #your-primary-color;
  --color-secondary: #your-secondary-color;
}
```

### Change Fonts

1. **Import new fonts** (in HTML or CSS)
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet" />
```

2. **Update tailwind.config.js**
```javascript
fontFamily: {
  sans: ["'Your Font'", "sans-serif"],
  cookie: ["'Your Script Font'", "cursive"]
}
```

### Change Content

1. Replace pizza images with your product images
2. Replace pizza names with your products
3. Update prices and descriptions
4. Replace hero video
5. Update logo in images/

---

## 🚀 Framework Integration

### React

```bash
# Install Tailwind
npm install -D tailwindcss

# Copy theme
cp tailwind.config.js ./
```

```jsx
// App.jsx
import './css/theme.css'
import './js/theme.js'

export default function App() {
  return (
    <div>
      <section className="section">
        <div className="card-hover">
          <h3>My Component</h3>
        </div>
      </section>
    </div>
  )
}
```

### Angular

```bash
# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```typescript
// app.component.ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <section class="section">
      <div class="card-hover">
        <h3>My Component</h3>
      </div>
    </section>
  `,
  styleUrls: ['./css/theme.css']
})
export class AppComponent {}
```

### Vue

```bash
# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```vue
<template>
  <section class="section">
    <div class="card-hover">
      <h3>My Component</h3>
    </div>
  </section>
</template>

<script setup>
// Your logic
</script>

<style>
@import './css/theme.css';
</style>
```

### Vanilla JS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="./css/theme.css" />
</head>
<body>
  <section class="section">
    <div class="card-hover">
      <h3>My Component</h3>
    </div>
  </section>
  
  <script src="./js/theme.js"></script>
</body>
</html>
```

---

## 📚 Available CSS Classes

### Containers
```html
<div class="hero-video">Video Hero Section</div>
<section class="section">Content Section</section>
<div class="theme-switcher">Dark Mode Toggle</div>
```

### Cards
```html
<div class="card-hover">Hover Card</div>
```

### Buttons
```html
<button class="btn-primary">Primary Button</button>
```

### Forms
```html
<input class="input-field" type="text" />
<textarea class="input-field"></textarea>
```

### Alerts
```html
<div class="alert alert-success">Success Message</div>
<div class="alert alert-danger">Error Message</div>
```

### Typography
```html
<h2 class="section-title">Section Title</h2>
<p class="section-subtitle">Section Subtitle</p>
<span class="font-cookie text-lg">Cookie Font</span>
```

### Colors
```html
<div class="text-primary-500">Primary Color</div>
<div class="text-secondary-500">Secondary Color</div>
<div class="bg-light-bg dark:bg-dark-bg">Background</div>
<div class="text-light-text dark:text-dark-text">Text</div>
```

### Responsive
```html
<!-- Hidden on mobile, visible on desktop -->
<div class="hidden md:block">Desktop Only</div>

<!-- Responsive text -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive Text</h1>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Items -->
</div>
```

---

## 🔌 Integration Examples

### For a Job Board Project
```html
<div class="card-hover">
  <h3 class="text-xl font-bold">Job Title</h3>
  <p class="text-secondary-500">Company Name</p>
  <p class="text-light-text dark:text-dark-text">Description</p>
  <button class="btn-primary">Apply Now</button>
</div>
```

### For a Blog Project
```html
<article class="card-hover">
  <img src="blog-cover.png" class="w-full rounded-lg mb-4" />
  <h2 class="section-title">Blog Post Title</h2>
  <p class="text-light-text dark:text-dark-text">Blog content...</p>
  <a href="#" class="text-primary-500 hover:text-primary-700">Read More</a>
</article>
```

### For a Portfolio Project
```html
<div class="hero-video">
  <video autoplay muted loop>
    <source src="portfolio-video.mp4" />
  </video>
  <div class="hero-overlay">
    <h1 class="font-cookie text-6xl text-white">Your Portfolio</h1>
  </div>
</div>
```

### For a Dashboard Project
```html
<section class="section">
  <h2 class="section-title">Dashboard</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div class="card-hover">
      <h3>Metric 1</h3>
      <p class="text-2xl text-primary-500">1,234</p>
    </div>
    <!-- More cards -->
  </div>
</section>
```

---

## 🛠️ Troubleshooting

### Tailwind Classes Not Working
1. Ensure `content` paths in `tailwind.config.js` match your files
2. Rebuild CSS if using build tool
3. Check for typos in class names
4. Verify Tailwind CDN is loaded

### Dark Mode Not Working
1. Check `js/theme.js` is loaded
2. Verify `darkMode: 'class'` in config
3. Test localStorage: `localStorage.getItem('pezza-theme')`
4. Check browser dev tools console for errors

### Images/Videos Not Loading
1. Check file paths are relative: `./images/image.png`
2. Verify files exist in correct directories
3. Check file permissions
4. Use absolute paths if needed

### Fonts Not Loading
1. Check internet connection
2. Verify Google Fonts link
3. Check font-family in CSS matches import
4. Try cache bust: Add `?v=1` to font link

---

## 📖 Learning Resources

- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Official documentation
- **[MDN Web Docs](https://developer.mozilla.org/)** - Web standards
- **[Can I Use](https://caniuse.com/)** - Browser compatibility

---

## 🎯 Template Reuse Strategy

### Approach 1: Direct Copy (Recommended for Quick Start)
```bash
cp -r ../Theme/* your-project/
# Edit tailwind.config.js for your colors
# Update content and images
```

### Approach 2: NPM Package (For Multiple Projects)
```bash
# Package the theme as npm package
npm pack
# Install in other projects
npm install ../path/to/theme.tgz
```

### Approach 3: Git Submodule (For Shared Updates)
```bash
git submodule add https://url/Theme.git ./theme
# Update tailwind.config.js to reference theme/
```

### Approach 4: Template Engine (For Dynamic Content)
```bash
# Use theme with template engine (Handlebars, EJS, etc.)
# Inject project-specific content dynamically
```

---

## ✅ Quality Checklist

Before deploying your project:

- [ ] All colors match brand guidelines
- [ ] Fonts display correctly
- [ ] Images/videos load properly
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Forms functional
- [ ] Links work
- [ ] No console errors
- [ ] Accessibility standards met
- [ ] Performance acceptable

---

## 📞 Support

For issues or questions:
1. Check [MODERNIZATION-COMPLETE.md](./MODERNIZATION-COMPLETE.md)
2. Review [FRAMEWORK-INTEGRATION.md](./FRAMEWORK-INTEGRATION.md)
3. Check [QUICK-START-3.0.md](./QUICK-START-3.0.md)
4. Review working example in `index.html`

---

## 🚀 Ready to Use!

Your theme is now ready for any Incubator project. Copy it, customize it, and build something amazing! 🎉

---

**Theme Version**: 3.0.0 | **Last Updated**: 2025 | **License**: MIT
