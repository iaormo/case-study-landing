# Chloe Consulting Case Study Landing Page

A compelling case study landing page showcasing how Chloe Consulting saved Pro Insurance Group $2.3M in lost revenue through a complete RevOps transformation.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Technical Case Study**: Detailed implementation breakdown
- **Video Testimonial Placeholder**: Ready for client video integration
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Meta tags and structured content
- **Netlify Ready**: Pre-configured for easy deployment

## 🛠️ Tech Stack

- **React 19** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Radix UI** components

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect Repository**: Link your GitHub/GitLab repository to Netlify
2. **Build Settings**: 
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: `18`
3. **Deploy**: Netlify will automatically deploy on every push to main

### Manual Deployment

```bash
# Build the project
pnpm run build

# Upload the 'dist' folder to your hosting provider
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Radix UI components
├── assets/             # Images and media files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.jsx             # Main application component
├── App.css             # Global styles
├── index.css           # Tailwind CSS imports
└── main.jsx            # Application entry point
```

## 🎨 Customization

### Colors
The site uses a pink-to-purple gradient theme. Update colors in:
- `src/App.jsx` - Component styling
- `tailwind.config.js` - Tailwind configuration

### Content
Update case study content in `src/App.jsx`:
- Hero section
- Technical details
- Results metrics
- Testimonial content

### Images
Replace images in `src/assets/`:
- `chloe_*.webp` - Chloe's photos
- `workflow.png` - System architecture
- Other case study images

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic with Vite
- **Caching**: Optimized headers for static assets

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:

```bash
VITE_SITE_URL=https://your-site.netlify.app
VITE_SITE_NAME=Chloe Consulting Case Study
```

### Netlify Configuration
The `netlify.toml` file includes:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Cache optimization

## 📈 Analytics

To add analytics, uncomment and configure in `.env.local`:
```bash
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXXX
```

## 🚀 Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/case-study-landing)

## 📞 Contact

For questions about this case study or Chloe Consulting services:
- **Website**: [chloeconsulting.co](https://chloeconsulting.co)
- **Contact**: [chloeconsulting.co/contact-chloe](https://chloeconsulting.co/contact-chloe)

---

Built with ❤️ by Chloe Consulting
