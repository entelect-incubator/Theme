# Pezza Theme — concise README

Pezza is a lightweight, framework-agnostic Tailwind CSS theme focused on a simple light/dark design system and reusable component utilities (buttons, cards, forms, alerts). This README explains intent, quick setup, and how to integrate the compiled CSS in React, Angular, Vue or plain HTML projects.

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/entelect-incubator/Theme?utm_source=oss&utm_medium=github&utm_campaign=entelect-incubator%2FTheme&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

## Intent
- Provide a ready-to-use styling system that ships as compiled CSS (`css/theme.css`).
- Keep behavior minimal: theme toggling is done by toggling the `dark` class on the `html` element (no framework dependency).
- Allow projects to adopt the design tokens and utilities quickly (copy `tailwind.config.js` for deeper integration).

## Quick start
1. Install (if you want to build locally):

```powershell
npm install
npm run build    # generates css/theme.css from css/input.css
```

2. Serve the folder for the demo:

```powershell
npm run dev      # starts http-server on port 8000
```

3. Open `http://localhost:8000`.

Note: `css/theme.css` is committed after build in this repo; you can use it directly without running the build step.

## How to use (plain HTML)
Link the compiled stylesheet in your HTML head:

```html
<link rel="stylesheet" href="/css/theme.css">
```

Toggle dark mode in JavaScript:

```js
// toggle
document.documentElement.classList.toggle('dark')
// persist
localStorage.setItem('pezza-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
```

Recommended: read `js/theme.js` (demo) for a small, accessible theme switcher implementation.

## React integration
1. Copy `css/theme.css` into your app's public folder (or reference it from the repo).
2. Import in your root component or reference it in `index.html`:

```js
import '../path/to/theme.css'; // or put <link> in public/index.html
```

3. Toggle theme:

```jsx
function toggleTheme() {
  document.documentElement.classList.toggle('dark')
}

// usage
<button onClick={toggleTheme} className="btn-primary">Toggle Theme</button>
```

## Angular integration
Add the compiled CSS to `angular.json` styles array or import it in `styles.scss`:

```json
"styles": [
  "src/styles.scss",
  "src/assets/theme/css/theme.css"
]
```

Then use the same `document.documentElement.classList.toggle('dark')` approach to switch themes.

## Vue integration
Import the CSS in `main.js` or include it in `index.html`:

```js
import '@/assets/theme/css/theme.css'
```

Toggle theme the same way (`document.documentElement.classList.toggle('dark')`).

## Theming contract (what to expect)
- Semantic utility classes: `bg-light-bg`, `bg-light-surface`, `bg-dark-bg`, `text-light-text`, `text-dark-text`, etc.
- Component utilities: `.btn-primary`, `.btn-secondary`, `.card-hover`, `.input-field`, `.alert`, `.badge`.
- Dark mode is implemented by CSS variables and Tailwind utilities; toggling `html.dark` flips variables and the Tailwind `dark:` variants.

## Customization
- For deep integration (allowing your build to tree-shake unused classes), copy and extend `tailwind.config.js` into your project and run Tailwind with your content paths.
- Edit color tokens in `tailwind.config.js` and rebuild with `npm run build`.

## Development notes
- The repo provides `npm run watch` (Tailwind CLI watch) and `npm run build`.
- If you prefer a CDN for quick demos, include `https://cdn.tailwindcss.com` in development only — not recommended for production.

## License
MIT

---
If you'd like, I can:
- add a tiny `README-EXAMPLE.md` with copy-paste snippets for each framework.
- or produce short sample files showing imports for CRA/Vite/Angular CLI/Vue CLI—tell me which one you want next.

# Pezza Pizzeria Theme - Framework Agnostic

A modern, clean, reusable Tailwind CSS theme for Pezza Pizzeria. Framework-agnostic design works with React, Angular, Vue, and vanilla JavaScript.

## Features

- ✅ Light & Dark Mode with theme persistence
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Primary color: #dc3348 | Secondary: #fec844
- ✅ Font pairing: Cookie (display) + Belleza (body)
- ✅ Production-ready Tailwind CSS setup
- ✅ Clean, semantic HTML
- ✅ Accessible form controls

## Quick Start

### Installation

```bash
npm install
npm run build
npm run dev
```

Visit `http://localhost:8000`

## Project Structure

```
theme/
├── index.html              # Main demo page
├── email-template.html     # Email template
├── css/
│   ├── input.css          # Tailwind @directives
│   └── theme.css          # Compiled output (generated)
├── js/
│   ├── theme.js           # Dark mode toggle
│   └── index.js           # Form handling
├── images/                 # Pizza images, logo
├── videos/                 # Hero video
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## Available Scripts

- `npm run build` - Generate CSS from Tailwind
- `npm run watch` - Watch for CSS changes
- `npm run dev` - Start dev server
- `npm run serve` - Start HTTP server

## Building the CSS

The theme uses a Tailwind CLI build. Before first use or after CSS changes:

```bash
npm run build
```

This generates `css/theme.css` from `css/input.css`.

## Using in React

```jsx
import './theme/css/theme.css';

function App() {
  return (
    <div className="section bg-light-bg dark:bg-dark-bg">
      <h1 className="section-title">Welcome</h1>
      <button className="btn-primary">Order Now</button>
    </div>
  );
}
```

## Using in Angular

```typescript
// app.component.ts
export class AppComponent {
  isDarkMode = false;

  toggleTheme() {
    document.documentElement.classList.toggle('dark');
    this.isDarkMode = !this.isDarkMode;
  }
}
```

```html
<!-- app.component.html -->
<div class="section bg-light-bg dark:bg-dark-bg">
  <h1 class="section-title">Welcome</h1>
  <button class="btn-primary" (click)="toggleTheme()">Toggle Theme</button>
</div>
```

Include in `angular.json`:

```json
"styles": [
  "src/styles.css",
  "src/theme/css/theme.css"
]
```

## Using in Vue

```vue
<template>
  <div class="section bg-light-bg dark:bg-dark-bg">
    <h1 class="section-title">Welcome</h1>
    <button class="btn-primary" @click="toggleTheme">Toggle Theme</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle('dark');
    }
  }
}
</script>

<style>
@import './theme/css/theme.css';
</style>
```

## Color System

- **Primary**: #dc3348 (Red)
- **Secondary**: #fec844 (Gold)
- **Light Background**: #ffffff
- **Dark Background**: #202020
- **Light Surface**: #f9fafb
- **Dark Surface**: #2a2a2a

## CSS Classes

### Layout
- `.section` - Page section with padding
- `.container-responsive` - Max-width container
- `.grid-responsive` - Responsive grid

### Components
- `.btn-primary` / `.btn-secondary` - Buttons
- `.input-field` - Form inputs & textareas
- `.card-hover` - Hover card
- `.alert` / `.alert-success` / `.alert-danger` - Alerts
- `.badge` / `.badge-primary` / `.badge-secondary` - Badges

### Text
- `.section-title` - Large title (Cookie font)
- `.section-subtitle` - Subtitle text
- `.font-cookie` - Cookie font
- `.font-belleza` - Belleza font

### Utilities
- `.fade-in` - Fade animation
- `.slide-up` - Slide up animation
- `.hidden` - Hide element

## Dark Mode

Automatically detects system preference or uses saved theme. Theme switcher in top-right corner.

Local storage key: `pezza-theme`

## Email Template

Use `email-template.html` as a base for email designs. It includes:
- Responsive layout
- Color system integration
- Tailwind utilities support

## Customization

Edit `tailwind.config.js` to customize:
- Colors
- Font families
- Breakpoints
- Extended utilities

Then run `npm run build` to regenerate CSS.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox, CSS Custom Properties
- ES6+ JavaScript

## License

MIT

For an example theme switcher component, see `js/theme.js` in this repo. The demo includes a small, framework-agnostic switcher that toggles the `dark` class on the `html` element.
```

Import Tailwind CDN in `public/index.html`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

## 📦 Using in Angular

1. Copy `css/theme.css` to `src/assets/styles/`
2. Add to `styles.css`:
```css
@import 'assets/styles/theme.css';
@import url('https://cdn.tailwindcss.com');
```
3. Add ThemeSwitcher component

## 📦 Using in Vue

```javascript
// main.js
import './styles/theme.css';
```

Then import the ThemeSwitcher component from `js/theme.js`

## 🎨 CSS Variables

```css
--color-primary: #dc3348
--color-secondary: #fec844

/* Light Mode */
--bg-color: #ffffff
--text-color: #1f2937
--input-bg: #ffffff

/* Dark Mode */
--bg-color: #1a1a1a  
--text-color: #e5e7eb
--input-bg: #2a2a2a
```

## 🎯 Key Classes

```html
<!-- Buttons -->
<button class="btn-primary">Click Me</button>
<button class="btn-secondary">Secondary</button>

<!-- Form Inputs -->
<input type="text" class="input-field" />
<textarea class="input-field"></textarea>

<!-- Cards -->
<div class="card-hover">Content</div>

<!-- Alerts -->
<div class="alert alert-success">Success!</div>
<div class="alert alert-danger">Error!</div>

<!-- Sections -->
<section class="section bg-light-bg dark:bg-dark-bg">
  <h2 class="section-title">Title</h2>
  <p class="section-subtitle">Subtitle</p>
</section>
```

## 📧 Email Template

Use `email-template-new.html` with placeholders:
- {{NAME}} - Customer name
- {{ADDRESS}} - Delivery address
- {{PHONE}} - Phone number
- {{EMAIL}} - Email address

## 🎯 File Structure

```
├── index.html              # Main demo
├── email-template-new.html # Email template
├── theme.json              # Theme config
├── tailwind.config.js      # Tailwind setup
├── css/theme.css          # All styles
├── js/
│   ├── theme.js           # Dark mode switcher
│   └── index.js           # Form handling
├── images/
│   ├── favicon/           # Favicon files
│   └── *.png              # Pizza images
└── videos/
    └── hawaiian-pizza.mp4 # Hero video
```

## 🌈 Colors

- **Primary**: #dc3348 (Red) - CTA, accents
- **Secondary**: #fec844 (Gold) - Highlights
- **Light BG**: #ffffff
- **Dark BG**: #1a1a1a
- **Light Surface**: #f9fafb
- **Dark Surface**: #2a2a2a

## ✨ Features

✅ Light & Dark Mode with system detection  
✅ Responsive (mobile, tablet, desktop)  
✅ Video hero with overlay  
✅ Tailwind CSS (no build needed)  
✅ Cookie & Belleza fonts  
✅ Form validation  
✅ Accessible components  
✅ Framework-agnostic  

## 🔗 Integration Examples

### Copy CSS Variables

For custom components, use:
```css
background-color: var(--bg-color);
color: var(--text-color);
border: 1px solid var(--border-color);
```

### Copy Tailwind Config

Extend your `tailwind.config.js` with the color palette and fonts from this project.

### Copy Components

All `.card-hover`, `.btn-primary`, `.input-field` classes are Tailwind-based and can be copied directly.

## 📝 License

MIT - Free to use in any project

```html
<!-- Buttons -->
<button class="btn-primary">Click Me</button>

<!-- Forms -->
<input class="input-field" type="text" placeholder="Name" />
<textarea class="input-field" rows="3"></textarea>

<!-- Cards -->
<div class="card-hover">
  <h3>Card Title</h3>
  <p>Content</p>
</div>

<!-- Sections -->
<section class="section bg-light-bg dark:bg-dark-bg">
  <h2 class="section-title">Title</h2>
  <p class="section-subtitle">Subtitle</p>
</section>

<!-- Alerts -->
<div class="alert alert-success">✓ Success!</div>
<div class="alert alert-danger">✗ Error!</div>
```

## 🔧 Framework Setup

### React
```jsx
import './css/theme.css'

function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }
  
  return (
    <button onClick={toggleTheme} className="btn-primary">
      Toggle Theme
    </button>
  )
}
```

### Angular
```typescript
toggleTheme() {
  document.documentElement.classList.toggle('dark')
}
```

```html
<button (click)="toggleTheme()" class="btn-primary">
  Toggle Theme
</button>
```

### Vue
```vue
<button @click="toggleTheme" class="btn-primary">
  {{ isDark ? '☀️' : '🌙' }}
</button>

<script>
export default {
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle('dark')
    }
  }
}
</script>
```

### Vanilla JS
```html
<link rel="stylesheet" href="css/theme.css" />
<script src="https://cdn.tailwindcss.com"></script>

<button class="btn-primary">Click Me</button>

<script src="js/theme.js"></script>
```

**For detailed setup, see [THEME-INTEGRATION.md](./THEME-INTEGRATION.md)**

## 📧 Email Template

Professional email template in `email-template-dark.html`:
- Responsive design
- Dark theme
- Brand colors
- Order format ready

## 🌙 Dark Mode

### Automatic
Detects system preference + saves user choice:
```javascript
<script src="js/theme.js"></script>
```

### Manual
```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Enable dark
document.documentElement.classList.add('dark')

// Disable dark
document.documentElement.classList.remove('dark')
```

### In HTML
```html
<!-- Light only -->
<div class="bg-white">Light</div>

<!-- Dark only -->
<div class="dark:bg-gray-900">Dark</div>

<!-- Responsive -->
<div class="bg-white dark:bg-gray-900">Both</div>
```

## 📁 File Structure

```
theme/
├── css/
│   └── theme.css                # Component styles + Tailwind
├── js/
│   ├── theme.js                 # Theme switcher
│   └── index.js                 # Form logic
├── images/
│   ├── favicon/                 # Favicon files
│   ├── hawaiian.png
│   ├── pepperoni.png
│   ├── regina.png
│   └── margherita.png
├── videos/
│   └── pizzas.mp4               # Hero video
├── index.html                   # Demo page
├── theme.json                   # Configuration
├── tailwind.config.js           # Tailwind config
├── email-template-dark.html     # Email template
├── package.json                 # Dependencies
└── THEME-INTEGRATION.md         # Integration guides
```

## 🎯 Responsive Breakpoints

```
sm: 640px   (mobile)
md: 768px   (tablet)
lg: 1024px  (desktop)
xl: 1280px  (large desktop)
2xl: 1536px (extra large)
```

Usage:
```html
<div class="text-xl md:text-2xl lg:text-3xl">
  Text scales across devices
</div>
```

## 📝 Typography

### Fonts
- **Belleza** - Primary font (body text, clean & elegant)
- **Cookie** - Accent font (headings, decorative)

```html
<h1 class="font-cookie text-4xl">Heading</h1>
<p class="font-sans text-base">Body text</p>
```

### Sizes
- `text-xs`: 0.75rem
- `text-sm`: 0.875rem
- `text-base`: 1rem
- `text-lg`: 1.125rem
- `text-xl`: 1.25rem
- `text-2xl`: 1.5rem
- `text-3xl`: 1.875rem
- `text-4xl`: 2.25rem

## 🔄 Using in Other Projects

### Copy Files
```bash
cp -r css your-project/
cp -r js/theme.js your-project/
cp theme.json your-project/
cp tailwind.config.js your-project/
```

### Reference theme.json
Use as template for your Tailwind config:
```javascript
const theme = require('./theme.json')

module.exports = {
  theme: {
    colors: theme.colors,
    spacing: theme.spacing
  }
}
```

## ✅ Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎓 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

## 📄 License

MIT - Free to use in commercial and personal projects

## 🤝 Contributing

Found an issue? Submit a PR!

---

**Made with ❤️ for beautiful interfaces**
  }, []);

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('pezza-theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, config: themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### 5. Use in Components
```javascript
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export function MyComponent() {
  const { isDark, toggleTheme, config } = useContext(ThemeContext);

  return (
    <div className="bg-light-bg dark:bg-dark-bg">
      <button 
        onClick={toggleTheme}
        className="btn-primary"
      >
        {isDark ? '☀️' : '🌙'} Toggle
      </button>
    </div>
  );
}
```

---

### Angular Integration

#### 1. Install Dependencies
```bash
npm install -D tailwindcss
npx tailwindcss init
```

#### 2. Update `angular.json`
```json
"styles": [
  "src/styles.css",
  "src/css/theme.css"
]
```

#### 3. Create Theme Service
```typescript
// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import themeConfig from '../../config/theme.json';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode$ = new BehaviorSubject<boolean>(false);
  private storageKey = 'pezza-theme';

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const saved = localStorage.getItem(this.storageKey);
    const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(isDark);
  }

  private setTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.darkMode$.next(isDark);
    localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
  }

  toggleTheme() {
    this.setTheme(!this.darkMode$.value);
  }

  get isDark$() {
    return this.darkMode$.asObservable();
  }

  get config() {
    return themeConfig;
  }
}
```

#### 4. Use in Components
```typescript
// src/app/components/theme-switcher.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <div class="theme-switcher">
      <button (click)="themeService.toggleTheme()" class="theme-toggle">
        {{ (themeService.isDark$ | async) ? '☀️' : '🌙' }}
      </button>
    </div>
  `
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) {}
}
```

---

### Vue Integration

#### 1. Install Dependencies
```bash
npm install -D tailwindcss
npx tailwindcss init
```

#### 2. Create Theme Composable
```javascript
// src/composables/useTheme.js
import { ref, onMounted } from 'vue';
import themeConfig from '../config/theme.json';

export function useTheme() {
  const isDark = ref(false);
  const storageKey = 'pezza-theme';

  const setTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    isDark.value = dark;
    localStorage.setItem(storageKey, dark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    setTheme(!isDark.value);
  };

  onMounted(() => {
    const saved = localStorage.getItem(storageKey);
    const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(dark);
  });

  return {
    isDark,
    toggleTheme,
    config: themeConfig
  };
}
```

#### 3. Use in Components
```vue
<template>
  <div class="bg-light-bg dark:bg-dark-bg">
    <button @click="toggleTheme" class="btn-primary">
      {{ isDark ? '☀️' : '🌙' }} Toggle
    </button>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>
```

---

## 📧 Email Template

Located in `email-template.html`. Features:

- Dark-themed design matching brand colors
- Responsive layout for mobile devices
- Professional order summary section
- Customer information display
- Clean styling without gradients
- Template variables: `{{CUSTOMER_NAME}}`, `{{CUSTOMER_EMAIL}}`, etc.

### Usage
1. Copy `email-template.html` to your email service
2. Replace `{{VARIABLE_NAME}}` with your dynamic content
3. Test with email clients (Gmail, Outlook, Apple Mail)

---

## 🎨 Customization

### Update Colors
Edit `theme.json`:
```json
{
  "colors": {
    "primary": {
      "500": "#YOUR_COLOR"
    },
    "secondary": {
      "400": "#YOUR_COLOR"
    }
  }
}
```

### Update Fonts
Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ["'Your Font'", "sans-serif"],
  cookie: ["'Your Accent Font'", "cursive"]
}
```

### Add Custom Components
Add to `css/theme.css`:
```css
@layer components {
  .my-custom-btn {
    @apply px-6 py-3 rounded-lg font-bold transition-all duration-200;
  }
}
```

---

## 🧪 Testing

### Test Dark Mode
Click the theme switcher (top-right corner) to toggle between light and dark modes. Your preference is saved in localStorage.

### Test Responsiveness
```bash
npm run dev  # or
npx http-server . -p 8000
```

Visit `http://localhost:8000` and test on:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

---

## 📦 Build for Production

### With Tailwind CLI (Optional)
```bash
npx tailwindcss -i css/theme.css -o css/theme.min.css --minify
```

### For React/Angular/Vue
Follow their official build commands - the theme will be bundled automatically.

---

## 🔗 Using theme.json

The `theme.json` file is your single source of truth for design tokens:

```javascript
// In React
import themeConfig from './config/theme.json';

// Use colors
const primaryColor = themeConfig.colors.primary[500];

// In Angular
import themeConfig from './config/theme.json';
this.brandColor = themeConfig.colors.primary[500];
```

---

## 🤝 Contributing

Found a bug or have a suggestion? Please create an issue or submit a pull request!

---

## 📄 License

MIT © 2025 Entelect Incubator

This is the **fastest and easiest** way to use the theme. Works with all frameworks!

### Step 1: Copy CSS to Your Project
```bash
cp theme/css/theme.css your-project/
```

### Step 2: Link in Your HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My App</title>
    <!-- 👇 Just link the CSS! -->
    <link rel="stylesheet" href="path/to/theme.css">
</head>
<body>
    <!-- Start using classes immediately -->
    <button class="btn btn-primary">Click me</button>
    <div class="card">Content</div>
</body>
</html>
```

### Step 3: Done! Use the Classes
```html
<button class="btn btn-primary">Submit</button>
<button class="btn btn-secondary btn-lg">Large Button</button>

<div class="card card-hover">
    <h3 class="text-xl font-bold">Card Title</h3>
    <p class="text-gray-600">Card content</p>
</div>

<div class="grid-responsive">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

---

## 💻 Framework Integration (Option A - Direct CSS Link)

### ⚛️ React

**Step 1: Copy theme CSS to public folder**
```bash
cp path/to/theme.css public/
```

**Step 2: Link in public/index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
    <!-- Link the theme CSS -->
    <link rel="stylesheet" href="%PUBLIC_URL%/theme.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

**Step 3: Use in Components (src/App.js)**
```jsx
export default function App() {
  return (
    <div className="container-responsive py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
      
      <button className="btn btn-primary">Primary Button</button>
      
      <div className="grid-responsive mt-12">
        <div className="card">
          <h3 className="text-lg font-bold">Card 1</h3>
          <p className="text-gray-600">Content</p>
        </div>
        <div className="card card-hover">
          <h3 className="text-lg font-bold">Card 2</h3>
          <p className="text-gray-600">Content</p>
        </div>
      </div>
    </div>
  );
}
```

### 🅰️ Angular

**Step 1: Copy theme CSS to src/assets**
```bash
cp path/to/theme.css src/assets/
```

**Step 2: Link in src/index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Angular App</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Link the theme CSS -->
    <link rel="stylesheet" href="assets/theme.css">
</head>
<body>
    <app-root></app-root>
</body>
</html>
```

**Step 3: Use in Components (src/app/app.component.html)**
```html
<div class="container-responsive py-16">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
    
    <button class="btn btn-primary">Primary Button</button>
    
    <div class="grid-responsive mt-12">
        <div class="card">
            <h3 class="text-lg font-bold">Card 1</h3>
            <p class="text-gray-600">Content</p>
        </div>
        <div class="card card-hover">
            <h3 class="text-lg font-bold">Card 2</h3>
            <p class="text-gray-600">Content</p>
        </div>
    </div>
</div>
```

### 💚 Vue

**Step 1: Copy theme CSS to public**
```bash
cp path/to/theme.css public/
```

**Step 2: Link in index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue App</title>
    <!-- Link the theme CSS -->
    <link rel="stylesheet" href="/theme.css">
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>
```

**Step 3: Use in Components (src/App.vue)**
```vue
<template>
    <div class="container-responsive py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
        
        <button class="btn btn-primary">Primary Button</button>
        
        <div class="grid-responsive mt-12">
            <div class="card">
                <h3 class="text-lg font-bold">Card 1</h3>
                <p class="text-gray-600">Content</p>
            </div>
            <div class="card card-hover">
                <h3 class="text-lg font-bold">Card 2</h3>
                <p class="text-gray-600">Content</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// No setup needed!
</script>
```

### 📝 Vanilla HTML/CSS/JS

**Create index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My App</title>
    <!-- Link the theme CSS -->
    <link rel="stylesheet" href="theme.css">
</head>
<body>
    <div class="container-responsive py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
        
        <button class="btn btn-primary" onclick="handleClick()">Click Me</button>
        
        <div class="grid-responsive mt-12">
            <div class="card">
                <h3 class="text-lg font-bold">Card 1</h3>
                <p class="text-gray-600">Content</p>
            </div>
            <div class="card card-hover">
                <h3 class="text-lg font-bold">Card 2</h3>
                <p class="text-gray-600">Content</p>
            </div>
        </div>
    </div>

    <script>
        function handleClick() {
            alert('Button clicked!');
        }
    </script>
</body>
</html>
```

## 🎨 Customization

### Using `theme.json`

The `theme.json` file contains all design tokens:

```json
{
  "colors": {
    "primary": "#ff6b35",
    "secondary": "#004e89"
  },
  "typography": {
    "fontFamily": { "sans": "..." },
    "fontSize": { "base": "1rem" }
  },
  "spacing": {
    "md": "1rem",
    "lg": "1.5rem"
  }
}
```

### Customizing Colors

Edit `theme.json` colors, then rebuild CSS:
```bash
npx tailwindcss -i css/theme.css -o css/theme.css
```

Or directly edit `tailwind.config.js` and rebuild.

## 🧩 Component Library

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>
```

### Cards

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content here</p>
</div>

<div class="card card-hover">
  Hover effects enabled
</div>
```

### Forms

```html
<label class="label">Email</label>
<input class="input-field" type="email" placeholder="you@example.com" />

<textarea class="input-field" rows="4"></textarea>
```

### Alerts

```html
<div class="alert alert-success">✓ Success message</div>
<div class="alert alert-danger">✗ Error message</div>
<div class="alert alert-warning">⚠ Warning message</div>
<div class="alert alert-info">ℹ Info message</div>
```

### Layout

```html
<!-- Responsive container -->
<div class="container-responsive">Content</div>

<!-- Responsive grid (1 col on mobile, 3 cols on desktop) -->
<div class="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## 📧 Email Template

A professional email template with theme colors is included in `email-template.html`:

**Features:**
- ✅ Responsive design (works in all email clients)
- ✅ Theme colors (orange gradient header)
- ✅ Clean, professional layout
- ✅ Call-to-action button
- ✅ Order confirmation style
- ✅ Preformatted for HTML emails

**How to use:**
1. Open `email-template.html`
2. Replace `%name%` with customer name variable
3. Replace `%pizzas%` with order items list
4. Send via email service

**Example usage:**
```javascript
// Node.js with nodemailer
const template = fs.readFileSync('email-template.html', 'utf8');
const html = template
    .replace('%name%', customer.name)
    .replace('%pizzas%', orderItems.join(', '));

await transporter.sendMail({
    to: customer.email,
    subject: 'Order Confirmation',
    html: html
});
```

## 🧩 Component Library

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-outline">Outline</button>
```

### Cards

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content here</p>
</div>

<div class="card card-hover">
  Hover effects enabled
</div>
```

### Forms

```html
<label class="label">Email</label>
<input class="input-field" type="email" placeholder="you@example.com" />

<textarea class="input-field" rows="4"></textarea>
```

### Alerts

```html
<div class="alert alert-success">✓ Success message</div>
<div class="alert alert-danger">✗ Error message</div>
<div class="alert alert-warning">⚠ Warning message</div>
<div class="alert alert-info">ℹ Info message</div>
```

### Layout

```html
<!-- Responsive container -->
<div class="container-responsive">Content</div>

<!-- Responsive grid (1 col on mobile, 3 cols on desktop) -->
<div class="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## 🔧 Build & Development

### Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Watch for changes
```bash
npx tailwindcss -i css/theme.css -o css/theme.css --watch
```

### Build for production
```bash
npx tailwindcss -i css/theme.css -o css/theme.css --minify
```

## 📦 Tailwind Classes

This theme leverages **Tailwind's utility classes**:

```html
<!-- Spacing -->
<div class="p-4 m-2 mb-8">Padding & margin</div>

<!-- Typography -->
<h1 class="text-4xl font-bold text-gray-900">Heading</h1>
<p class="text-sm text-gray-600">Small text</p>

<!-- Colors -->
<div class="bg-orange-500 text-white">Colored box</div>

<!-- Responsive -->
<div class="w-full md:w-1/2 lg:w-1/3">Responsive width</div>

<!-- Hover, Focus, etc -->
<button class="hover:bg-orange-600 focus:ring-2">Interactive</button>
```

See [Tailwind Docs](https://tailwindcss.com/docs) for complete reference.

## 🌙 Dark Mode

Dark mode is automatic via CSS media queries. Add to HTML:
```html
<html class="dark">
```

Or use browser/system preference (default).

## ♻️ Reusing in Other Projects

1. **Copy theme files:**
   ```bash
   cp theme.json tailwind.config.js css/theme.css your-project/
   ```

2. **Link in HTML:**
   ```html
   <link rel="stylesheet" href="/path/to/theme.css" />
   ```

3. **Customize colors in `theme.json`** and rebuild if needed.

4. **Use the CSS classes** - they work the same everywhere!

## 📝 Examples

See `index.html` for a complete working example with forms, grids, and responsive design.

## 🤝 Best Practices

- Use semantic HTML with descriptive class names
- Leverage Tailwind utilities for layout
- Use custom `.btn`, `.card`, `.input-field` classes for consistency
- Refer to `theme.json` for approved colors and spacing
- Test on mobile and desktop
- Minify CSS for production

## 📜 License

This theme is part of the Incubator project.

---

**Version:** 2.0.0 | **Built with:** Tailwind CSS 3+ | **Framework:** Agnostic
