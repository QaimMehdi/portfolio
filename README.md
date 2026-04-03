# 🎨 3D Developer Portfolio

A modern, interactive 3D developer portfolio built with cutting-edge web technologies. Showcase your skills, projects, and experience with immersive 3D elements and smooth animations.

---

## ✨ Features

- **🎯 Interactive 3D Hero Section** - Stunning 3D desktop model with orbit controls
- **🌍 3D Skills Visualization** - Interactive technology icons rendered in 3D with floating animations
- **📱 Responsive Design** - Perfectly optimized for desktop, tablet, and mobile devices
- **⚡ High Performance** - Optimized with Brotli compression, intelligent caching, and service workers
- **💬 Contact Form** - Email integration powered by EmailJS
- **🌟 Dynamic Animations** - Smooth transitions and animations throughout using Framer Motion
- **🚀 Fast Load Times** - 75% reduction in load time with modern optimization techniques
- **🔄 Offline Support** - Service worker caching for instant repeat visits

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|---|
| **Frontend** | React.js, Vite |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **Styling** | Tailwind CSS, PostCSS |
| **Animations** | Framer Motion |
| **Forms & Email** | EmailJS, react-hook-form |
| **UI Components** | React Tilt, React Vertical Timeline |
| **Hosting** | Netlify |
| **Build Tools** | Vite, Terser |
| **Compression** | Brotli, Gzip |

---

## 📋 Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/qaimmehdi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   Get these from [EmailJS](https://www.emailjs.com/)

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 🚀 Usage

### Development

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
```

### Build Output

The build process generates:
- **Brotli compressed** assets (.br files)
- **Gzip compressed** assets (.gz files)
- Minified JavaScript and CSS
- Optimized images and 3D models

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── canvas/          # 3D canvas components (Three.js)
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx
│   │   └── Contact.jsx
│   ├── assets/              # Images, 3D models, files
│   ├── constants/           # Configuration constants
│   ├── hoc/                 # Higher-order components
│   ├── utils/               # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Global styles
├── public/
│   ├── desktop_pc/          # 3D desktop model
│   ├── planet/              # 3D planet model
│   └── sw.js                # Service worker
├── vite.config.js           # Vite configuration
├── netlify.toml             # Netlify deployment config
└── package.json
```

---

## ⚙️ Configuration

### Vite Configuration

The project uses Vite for blazing-fast development and optimized builds:
- React Fast Refresh for instant HMR
- Brotli + Gzip compression plugins
- Code splitting for optimal bundle sizes
- Terser minification for JavaScript

### Netlify Configuration

Deployment is configured via `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Intelligent caching headers for assets
- Compression serving (Brotli/Gzip)
- Security headers enabled

---

## 🔧 Customization

### Modify Portfolio Content

Edit `src/constants/index.js` to update:
- Navigation links
- Service offerings
- Technologies
- Experience timeline
- Projects / Works
- Client testimonials

### Customize Styling

Tailwind CSS configuration in `tailwind.config.cjs`:
- Extend color schemes
- Customize animations
- Modify responsive breakpoints

### Update 3D Models

Replace 3D model files in:
- `public/desktop_pc/` - Hero section model
- `public/planet/` - Contact section model

---

## 🚀 Deployment

### Deploy to Netlify

**Option 1: Git-based deployment (Recommended)**

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify automatically builds and deploys on push
4. Site goes live at `your-site.netlify.app`

**Option 2: Netlify CLI**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option 3: Manual Upload**

1. Run: `npm run build`
2. Download the `dist` folder
3. Drop into Netlify drop zone at [app.netlify.com](https://app.netlify.com)

### Production Checklist

- [ ] Update `public/` 3D models (optional)
- [ ] Configure EmailJS credentials in `.env`
- [ ] Update content in `src/constants/index.js`
- [ ] Test contact form
- [ ] Run `npm run build` and verify no errors
- [ ] Test on mobile and desktop
- [ ] Run Lighthouse audit (target 75+)
- [ ] Deploy to Netlify

---

## ⚡ Performance Optimizations

This portfolio includes built-in performance enhancements:

### Compression
- **Brotli** compression for modern browsers (up to 75% smaller)
- **Gzip** fallback for older browsers (60% reduction)
- Automatic serving of appropriate format based on browser

### Caching Strategy
- **Assets**: 1-year cache for hashed files (JS/CSS)
- **HTML**: 1-hour cache with revalidation
- **3D Models**: 1-year immutable cache
- **Service Worker**: Offline support & instant repeats

### Loading Optimization
- Lazy loading of 3D components
- Code splitting by route and dependency
- Font preconnect for faster Google Fonts loading
- Image optimization with WebP/AVIF support

### Expected Performance
- **LCP**: ~5-7s on mobile (75% faster)
- **TBT**: ~2-3s on mobile (90% less blocking)
- **Lighthouse**: 75-85% score
- **Repeat Visits**: <1s load time

See [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md) for detailed metrics.

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### EmailJS Not Working
- Verify service/template/public key in `.env`
- Check EmailJS dashboard for email delivery
- Ensure form field names match template variables

### 3D Models Not Displaying
- Check browser console for WebGL errors
- Verify 3D model files exist in `public/desktop_pc/` and `public/planet/`
- Ensure `.gltf` and `.data` files have correct paths

---

## 📖 Documentation

Detailed documentation files:
- [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md) - Technical optimization details
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Deployment verification steps
- [BUILD_OPTIMIZATION_RESULTS.md](./BUILD_OPTIMIZATION_RESULTS.md) - Performance metrics and results

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio.

---

## 🤝 Contributing

Contributions are welcome! If you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support & Contact

For questions or issues:
- Check the [Troubleshooting](#-troubleshooting) section
- Review documentation files
- Open an issue on GitHub

---

## 🌟 Show Your Support

If you found this portfolio template helpful, please consider:
- ⭐ Starring this repository
- 🔄 Forking and customizing it
- 👥 Sharing it with fellow developers
- 💬 Providing feedback and suggestions

---

**Built with ❤️ using React, Three.js, and Tailwind CSS**
