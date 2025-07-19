# Build Instructions for Impact Immersive Studio Replica

## Quick Start

1. **Install dependencies:**
   ```bash
   cd frontend
   yarn install
   ```

2. **Start development server:**
   ```bash
   yarn start
   ```

3. **Build for production:**
   ```bash
   yarn build
   ```

## For GoDaddy Deployment

After running `yarn build`, you'll get a `build` folder with these files:

```
build/
├── static/
│   ├── css/
│   │   ├── main.[hash].css
│   │   └── main.[hash].css.map
│   └── js/
│       ├── main.[hash].js
│       ├── main.[hash].js.map
│       └── [other chunks]
├── index.html
├── manifest.json
└── [other assets]
```

**Upload the entire contents of the `build` folder to your GoDaddy public_html directory.**

## Alternative: Convert to Plain HTML/CSS

If you want a simple HTML/CSS version without React build process:

1. **Create index.html** with all the component HTML
2. **Create styles.css** with all the CSS from App.css
3. **Add minimal JavaScript** for interactions

This approach is simpler but loses React's component structure and state management.

## Features Working

- ✅ Responsive navigation with mobile menu
- ✅ Smooth scrolling between sections  
- ✅ Contact form with validation (shows confirmation)
- ✅ Cookie consent banner
- ✅ Hover effects and animations
- ✅ Professional images from Unsplash
- ✅ Perfect color scheme matching original
- ✅ SEO optimized with meta tags

## File Structure

```
frontend/
├── public/
│   ├── index.html          # Main HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── App.js             # Main React component
│   ├── components.js      # All website components
│   ├── App.css           # Complete styling
│   ├── index.js          # React entry point
│   └── index.css         # Global styles
└── package.json          # Dependencies
```

## Deployment Notes

- The website is fully static after building
- No backend required for basic functionality
- Contact form shows confirmation but doesn't send emails
- All data is mocked to match the original website
- Images are loaded from Unsplash CDN (reliable)

## Customization

To customize the replica:

1. **Content:** Edit text in `components.js`
2. **Images:** Replace image URLs with your own
3. **Colors:** Update CSS color values in `App.css`
4. **Sections:** Add/remove components in `App.js`