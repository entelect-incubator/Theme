# Pezza Theme - Component Library

Complete reference of all available components and utility classes.

## Buttons

### Primary Button
```html
<button class="btn-primary">Click Me</button>
<button class="btn-primary" disabled>Disabled</button>
```

**Classes:** `btn-primary`
**States:** `hover:bg-primary-600`, `disabled`

### Secondary Button
```html
<button class="btn-secondary">Secondary</button>
```

**Classes:** `btn-secondary`

### Styling Options
```html
<!-- Different sizes using Tailwind -->
<button class="btn-primary px-3 py-2 text-sm">Small</button>
<button class="btn-primary px-6 py-3 text-base">Medium</button>
<button class="btn-primary px-8 py-4 text-lg">Large</button>

<!-- Full width -->
<button class="btn-primary w-full">Full Width</button>
```

## Forms

### Input Fields
```html
<input type="text" class="input-field" placeholder="Enter text" />
<input type="email" class="input-field" placeholder="user@example.com" />
<input type="password" class="input-field" placeholder="Password" />
<input type="number" class="input-field" placeholder="0" />
```

### Textarea
```html
<textarea class="input-field" rows="3" placeholder="Your message"></textarea>
<textarea class="input-field resize-vertical" rows="5"></textarea>
```

### Labels
```html
<div>
  <label class="block mb-2 font-medium">Email Address</label>
  <input type="email" class="input-field" />
</div>
```

### Form Groups
```html
<div class="space-y-6">
  <div>
    <label class="block mb-2 font-medium">Name</label>
    <input type="text" class="input-field" placeholder="John Doe" />
  </div>
  <div>
    <label class="block mb-2 font-medium">Email</label>
    <input type="email" class="input-field" placeholder="john@example.com" />
  </div>
  <button type="submit" class="btn-primary w-full">Submit</button>
</div>
```

### Checkboxes
```html
<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" class="w-5 h-5 rounded" />
  <span>Accept terms and conditions</span>
</label>
```

### Radio Buttons
```html
<label class="flex items-center gap-3 cursor-pointer">
  <input type="radio" name="option" class="w-5 h-5" />
  <span>Option 1</span>
</label>
<label class="flex items-center gap-3 cursor-pointer">
  <input type="radio" name="option" class="w-5 h-5" />
  <span>Option 2</span>
</label>
```

## Cards

### Basic Card
```html
<div class="card-hover">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-4">Card description</p>
  <button class="btn-primary">Action</button>
</div>
```

### Card with Image
```html
<div class="card-hover">
  <img src="image.jpg" alt="Description" class="w-full h-48 object-cover rounded-lg mb-4" />
  <h3 class="text-xl font-bold mb-2">Title</h3>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Card Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card-hover">Card 1</div>
  <div class="card-hover">Card 2</div>
  <div class="card-hover">Card 3</div>
</div>
```

## Sections

### Section Layout
```html
<section class="section bg-light-bg dark:bg-dark-bg">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="section-title">Section Title</h2>
      <p class="section-subtitle">Section subtitle or description</p>
    </div>
    <!-- Content here -->
  </div>
</section>
```

### Hero Section
```html
<div class="hero-video relative w-full h-96 md:h-[500px]">
  <video autoplay muted loop playsinline class="w-full h-full object-cover">
    <source src="video.mp4" type="video/mp4" />
  </video>
  <div class="hero-overlay">
    <h1 class="font-cookie text-6xl font-bold text-white mb-4">Welcome</h1>
    <p class="text-xl text-gray-100">Subtitle or tagline</p>
  </div>
</div>
```

## Alerts

### Success Alert
```html
<div class="alert alert-success">
  <div class="text-2xl">✓</div>
  <div>
    <p class="font-bold">Success!</p>
    <p class="text-sm mt-1">Your action was completed successfully.</p>
  </div>
</div>
```

### Error Alert
```html
<div class="alert alert-danger">
  <div class="text-2xl">✗</div>
  <div>
    <p class="font-bold">Error!</p>
    <p class="text-sm mt-1">Something went wrong. Please try again.</p>
  </div>
</div>
```

### Warning Alert
```html
<div class="alert alert-warning">
  <div class="text-2xl">⚠</div>
  <div>
    <p class="font-bold">Warning!</p>
    <p class="text-sm mt-1">Please review this important information.</p>
  </div>
</div>
```

### Info Alert
```html
<div class="alert alert-info">
  <div class="text-2xl">ℹ</div>
  <div>
    <p class="font-bold">Info</p>
    <p class="text-sm mt-1">Here's some useful information.</p>
  </div>
</div>
```

## Badges

### Color Variants
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
```

### Sizes
```html
<span class="badge badge-primary px-2 py-1 text-xs">Tiny</span>
<span class="badge badge-primary px-3 py-1 text-sm">Small</span>
<span class="badge badge-primary px-4 py-2">Default</span>
<span class="badge badge-primary px-6 py-3 text-lg">Large</span>
```

## Typography

### Headings
```html
<h1 class="text-5xl font-bold">Heading 1</h1>
<h2 class="text-4xl font-bold">Heading 2</h2>
<h3 class="text-3xl font-bold">Heading 3</h3>
<h4 class="text-2xl font-bold">Heading 4</h4>
<h5 class="text-xl font-bold">Heading 5</h5>
<h6 class="text-lg font-bold">Heading 6</h6>
```

### Font Styles
```html
<!-- Belleza (primary) -->
<p class="font-sans">Regular paragraph with Belleza font</p>

<!-- Cookie (accent/display) -->
<p class="font-cookie">Decorative text with Cookie font</p>

<!-- Text sizes -->
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
```

### Text Colors
```html
<!-- Dark mode aware -->
<p class="text-light-text dark:text-dark-text">Content</p>
<p class="text-light-text-secondary dark:text-dark-text-secondary">Secondary text</p>

<!-- Brand colors -->
<p class="text-primary-500">Primary text</p>
<p class="text-secondary-400">Secondary text</p>
```

## Utilities

### Spacing
```html
<!-- Padding -->
<div class="p-4">Padding all sides</div>
<div class="px-6 py-3">Padding horizontal and vertical</div>

<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mb-6">Margin bottom</div>

<!-- Gap (for flex/grid) -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Responsive Containers
```html
<!-- Max-width container -->
<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
  Content that's centered and padded
</div>

<!-- Responsive grid -->
<div class="grid-responsive">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Custom responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

### Display Utilities
```html
<!-- Hidden on small screens -->
<div class="hidden md:block">Visible on medium+ screens</div>

<!-- Hidden -->
<div class="hidden">Never visible</div>

<!-- Visibility -->
<div class="invisible">Hidden but takes space</div>
```

### Animations
```html
<!-- Fade in -->
<div class="fade-in">Content fades in</div>

<!-- Slide up -->
<div class="slide-up">Content slides up</div>

<!-- Custom animations -->
<div class="transition-all duration-300 hover:scale-105">Hover effect</div>
```

## Colors Reference

### Primary Color (#dc3348)
```html
<div class="bg-primary-50">Lightest</div>
<div class="bg-primary-100">...</div>
<div class="bg-primary-200">...</div>
<div class="bg-primary-300">...</div>
<div class="bg-primary-400">...</div>
<div class="bg-primary-500">Main (use this)</div>
<div class="bg-primary-600">Darker</div>
<div class="bg-primary-700">...</div>
<div class="bg-primary-800">...</div>
<div class="bg-primary-900">Darkest</div>
```

### Secondary Color (#fec844)
```html
<div class="bg-secondary-50">Lightest</div>
<div class="bg-secondary-100">...</div>
<div class="bg-secondary-200">...</div>
<div class="bg-secondary-300">...</div>
<div class="bg-secondary-400">Main (use this)</div>
<div class="bg-secondary-500">...</div>
<div class="bg-secondary-600">...</div>
<div class="bg-secondary-700">...</div>
<div class="bg-secondary-800">...</div>
<div class="bg-secondary-900">Darkest</div>
```

### Background/Surface Colors
```html
<!-- Light mode -->
<div class="bg-light-bg">Light background</div>
<div class="bg-light-surface">Light surface</div>

<!-- Dark mode -->
<div class="dark:bg-dark-bg">Dark background</div>
<div class="dark:bg-dark-surface">Dark surface</div>

<!-- Gray scale -->
<div class="bg-gray-100">Very light gray</div>
<div class="bg-gray-900">Very dark gray</div>
```

## Theme Switcher

### Automatic (Recommended)
```html
<!-- Include theme.js - it handles everything automatically -->
<script src="js/theme.js"></script>

<!-- Shows as floating button in top-right corner -->
<div class="theme-switcher">
  <button id="theme-toggle" class="theme-toggle">
    <span id="theme-icon">🌙</span>
  </button>
  <span class="theme-label" id="theme-label">Dark</span>
</div>
```

### Manual Control
```javascript
// Toggle theme
document.documentElement.classList.toggle('dark');

// Set to dark
document.documentElement.classList.add('dark');

// Set to light
document.documentElement.classList.remove('dark');

// Check current
const isDark = document.documentElement.classList.contains('dark');
```

## Complete Page Example

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My App</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link href="https://fonts.googleapis.com/css2?family=Belleza:wght@400&family=Cookie:wght@400&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/theme.css" />
</head>
<body>
  <!-- Theme Switcher (automatic) -->
  <div class="theme-switcher">
    <button id="theme-toggle" class="theme-toggle">
      <span id="theme-icon">🌙</span>
    </button>
    <span class="theme-label" id="theme-label">Dark</span>
  </div>

  <!-- Hero Section -->
  <div class="hero-video">
    <video autoplay muted loop playsinline class="w-full h-full object-cover">
      <source src="hero.mp4" type="video/mp4" />
    </video>
    <div class="hero-overlay">
      <h1 class="font-cookie text-6xl font-bold mb-4">Welcome</h1>
      <p class="text-xl text-gray-100">Your tagline here</p>
    </div>
  </div>

  <!-- Main Content -->
  <section class="section bg-light-bg dark:bg-dark-bg">
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <h2 class="section-title">Features</h2>
      <p class="section-subtitle">What we offer</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div class="card-hover">
          <h3 class="text-xl font-bold mb-2">Feature 1</h3>
          <p>Description</p>
        </div>
        <div class="card-hover">
          <h3 class="text-xl font-bold mb-2">Feature 2</h3>
          <p>Description</p>
        </div>
        <div class="card-hover">
          <h3 class="text-xl font-bold mb-2">Feature 3</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  </section>

  <script src="js/theme.js"></script>
</body>
</html>
```

## Best Practices

1. **Use semantic HTML** - Use proper tags like `<button>`, `<form>`, `<section>`
2. **Combine Tailwind classes** - `px-4 py-2 rounded-lg` for custom styling
3. **Leverage dark mode** - Use `dark:` prefix for dark mode styles
4. **Responsive first** - Start with mobile, add `md:`, `lg:` for larger screens
5. **Use CSS variables** - Theme colors available via `--color-primary`, etc.
6. **Keep it clean** - Don't over-complicate with too many custom classes

## Support

For complete documentation, see:
- `THEME-INTEGRATION-GUIDE.md` - Framework integration
- `QUICK-START-GUIDE.md` - Getting started
- `README.md` - Project overview
