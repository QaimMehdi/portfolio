# 3D Developer Portfolio

A professional interactive portfolio website built with modern web technologies. Showcases skills, projects, and experience through immersive 3D visualizations and carefully crafted animations.

## Features

- Interactive 3D hero section with detailed desktop model
- 3D skills visualization with floating technology icons
- Fully responsive design across all devices
- Production-grade performance with Brotli compression and intelligent caching
- Contact form with email integration
- Dynamic animations and transitions
- Optimized for Core Web Vitals
- Service worker implementation for offline support and repeat visit caching

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router |
| 3D Rendering | Three.js, React Three Fiber, React Three Drei |
| Styling | Tailwind CSS, PostCSS |
| Animation | Framer Motion |
| Forms | EmailJS |
| Deployment | Netlify |
| Build & Optimization | Vite, Terser, Brotli Compression |

## Installation

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/qaimmehdi/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser

## Development

### Available Commands

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── canvas/          # 3D canvas implementations
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx
│   │   └── Contact.jsx
│   ├── assets/              # Images and 3D models
│   ├── constants/           # Configuration data
│   ├── hoc/                 # Higher-order components
│   ├── utils/               # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── desktop_pc/          # 3D desktop model
│   ├── planet/              # 3D planet model
│   └── sw.js                # Service worker
├── vite.config.js
├── netlify.toml
└── package.json
```

## Configuration

### Environment Variables

Create a `.env` file with EmailJS credentials:

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service identifier
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template identifier
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

### Build Configuration

Vite is configured with:
- React Fast Refresh for development
- Brotli and Gzip compression for production
- Code splitting for optimal bundle sizes
- Asset minification and optimization

### Deployment Configuration

Netlify configuration (`netlify.toml`) specifies:
- Build command: `npm run build`
- Publish directory: `dist`
- Caching rules for different asset types
- HTTP compression and security headers

## Customization

### Portfolio Content

Edit `src/constants/index.js` to modify:
- Navigation links
- Service offerings
- Technology stack
- Experience timeline
- Projects and works
- Client testimonials

### Styling

Tailwind CSS can be customized through `tailwind.config.cjs`:
- Color schemes
- Animation timing
- Responsive breakpoints

### 3D Models

Replace 3D asset files in:
- `public/desktop_pc/` - Hero section model
- `public/planet/` - Contact section model

## Performance

### Optimization Techniques

- Deferred preloading of 3D assets
- Connection-aware loading strategy
- Intersection Observer for on-demand rendering
- Service worker for offline support and caching
- Asset compression (70% reduction with Brotli)
- Intelligent HTTP caching headers

### Expected Performance Metrics

- First Contentful Paint: 2-3 seconds
- Largest Contentful Paint: 5-7 seconds (mobile)
- Time to Interactive: 2-3 seconds
- Lighthouse Score: 75-85%

## Deployment

### Netlify

The project is optimized for Netlify deployment:

1. Connect GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Netlify automatically builds and deploys on push

### Build Requirements

- `.nvmrc` specifies Node.js version (18.19.0)
- `.npmrc` ensures proper dependency installation
- `netlify.toml` contains build configuration

## Troubleshooting

### Build Issues

Clear cache and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 3D Models Not Displaying

- Verify model files exist in `public/desktop_pc/` and `public/planet/`
- Check browser console for WebGL errors
- Ensure `.gltf` and `.data` files have correct paths

### Email Form Not Working

- Confirm EmailJS credentials in `.env`
- Verify service and template IDs in EmailJS dashboard
- Check email delivery logs

### Port Already in Use

```bash
npm run dev -- --port 3000
```

## Documentation

For detailed information on performance optimizations and deployment procedures, refer to the documentation files in the root directory.

## License

MIT License - This project is open source and available for use as a personal or portfolio template.

## Support

For questions or issues, open an issue on the GitHub repository.

---

Built with React, Three.js, and Tailwind CSS
