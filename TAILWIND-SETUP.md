# 🚀 Tailwind CSS Setup Guide - Pezza Theme

## Option 1: Quick Setup (Recommended)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
This watches your CSS and automatically rebuilds when changes are made.

### Step 3: In Another Terminal, Start Local Server
```bash
npm run serve
```
Then open: **http://localhost:8000**

---

## Option 2: Manual Build (One-time)

### Step 1: Install Tailwind CSS
```bash
npm install -D tailwindcss
```

### Step 2: Build CSS Once
```bash
npx tailwindcss -i css/theme.css -o css/theme.min.css --minify
```

### Step 3: Update HTML to Use Built CSS
In `index.html`, change:
```html
<!-- OLD -->
<link rel="stylesheet" href="css/theme.css" />

<!-- NEW -->
<link rel="stylesheet" href="css/theme.min.css" />
```

### Step 4: Start Local Server
```bash
python -m http.server 8000
```
Or use `npm run serve`

---

## Available npm Scripts

```bash
npm run dev      # Watch mode - rebuilds CSS on file changes
npm run build    # Build production CSS (minified)
npm run serve    # Start local Python HTTP server
```

---

## Common Issues & Solutions

### ❌ "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### ❌ CSS not loading (404 error)
**Solution:** 
1. Run `npm run build` to generate CSS
2. Check HTML file links to correct CSS file
3. Make sure file paths are correct

### ❌ Styles not applying
**Solution:**
1. Check if CSS file was generated: `ls -la css/`
2. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check browser console for errors

### ❌ Changes not applying during development
**Solution:**
1. Stop `npm run dev` with `Ctrl+C`
2. Run `npm run dev` again
3. Wait for "Built" message
4. Refresh browser

---

## File Structure

```
Theme/
├── css/
│   ├── theme.css          # Source (Tailwind directives)
│   └── theme.min.css      # Output (compiled CSS) ← Use this in production
├── tailwind.config.js     # Tailwind configuration
├── package.json           # npm scripts and dependencies
├── index.html             # Main page
└── ...
```

---

## Step-by-Step: First Time Setup

### 1. Open Terminal/Command Prompt
Navigate to the Theme directory:
```bash
cd D:\Dev\Incubator\Theme
```

### 2. Install Dependencies
```bash
npm install
```

This creates:
- `node_modules/` folder (dependencies)
- `package-lock.json` file

### 3. Build CSS
```bash
npm run build
```

This generates: `css/theme.min.css`

### 4. Update HTML
Change in `index.html`:
```html
<link rel="stylesheet" href="css/theme.min.css" />
```

### 5. Start Server
```bash
npm run serve
```

### 6. Open Browser
Visit: **http://localhost:8000**

---

## Development Workflow

### For Active Development:

**Terminal 1 (Watch CSS):**
```bash
npm run dev
```
Keep this running. CSS rebuilds automatically on changes.

**Terminal 2 (Web Server):**
```bash
npm run serve
```

**Browser:**
- Open http://localhost:8000
- Make changes to CSS or HTML
- Refresh browser to see changes

---

## Production Build

When ready to deploy:

```bash
npm run build
```

This creates:
- `css/theme.min.css` - Minified CSS for production
- Smaller file size (better performance)
- Ready to upload to server

---

## Customizing Tailwind

Edit `tailwind.config.js` to customize:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6b35',  // Your custom color
          600: '#ff5521',
        }
      }
    }
  }
}
```

After editing, run `npm run build` to regenerate CSS.

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Watch & rebuild CSS |
| `npm run build` | Build production CSS |
| `npm run serve` | Start HTTP server |

---

## Troubleshooting Checklist

- [ ] Node.js installed? (`node --version`)
- [ ] npm installed? (`npm --version`)
- [ ] Dependencies installed? (`ls node_modules` or `dir node_modules`)
- [ ] CSS built? (`ls css/theme.min.css` or `dir css\theme.min.css`)
- [ ] HTML links to CSS? (Check `<link>` tag)
- [ ] Server running? (Check http://localhost:8000)
- [ ] Browser cached? (Ctrl+Shift+R to clear)

---

## Support

If you encounter issues:

1. Check the output messages - they usually tell you what's wrong
2. Verify all files exist
3. Try rebuilding: `npm run build`
4. Clear browser cache: `Ctrl+Shift+Delete`
5. Restart server: Stop and run `npm run serve` again

---

**Status:** ✅ Ready to setup
**Recommended:** Use `npm run dev` for development
**Production:** Use `npm run build` for deployment
