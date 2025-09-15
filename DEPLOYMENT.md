# 🚀 Netlify Deployment Guide

## Quick Deploy (Recommended)

### Option 1: One-Click Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/case-study-landing)

### Option 2: Connect Repository
1. Go to [Netlify](https://app.netlify.com)
2. Click "New site from Git"
3. Connect your GitHub/GitLab repository
4. Netlify will auto-detect the settings from `netlify.toml`

## Manual Configuration

If you need to configure manually:

### Build Settings
- **Build command**: `pnpm run build`
- **Publish directory**: `dist`
- **Node version**: `18`

### Environment Variables (Optional)
Add these in Netlify dashboard under Site settings > Environment variables:

```bash
VITE_SITE_URL=https://your-site-name.netlify.app
VITE_SITE_NAME=Chloe Consulting Case Study
```

## Pre-Deployment Checklist

✅ **Build Test**
```bash
pnpm run build
pnpm run preview
```

✅ **Files Created**
- [x] `netlify.toml` - Netlify configuration
- [x] `_redirects` - SPA routing rules
- [x] `.gitignore` - Git ignore rules
- [x] `README.md` - Project documentation
- [x] `.env.example` - Environment variables template

✅ **Build Output**
- [x] `dist/` folder created
- [x] All assets optimized
- [x] No build errors

## Post-Deployment

### 1. Custom Domain (Optional)
- Go to Site settings > Domain management
- Add your custom domain
- Configure DNS records

### 2. SSL Certificate
- Automatically provided by Netlify
- Force HTTPS enabled by default

### 3. Performance Optimization
- CDN automatically enabled
- Gzip compression enabled
- Browser caching configured

### 4. Analytics (Optional)
Add to your site:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>

<!-- Hotjar -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## Troubleshooting

### Build Fails
1. Check Node version (should be 18+)
2. Verify `pnpm` is available
3. Check for TypeScript errors
4. Review build logs in Netlify dashboard

### 404 Errors on Refresh
- Ensure `_redirects` file is in `public/` folder
- Verify `netlify.toml` redirect rules

### Slow Loading
- Check image optimization
- Verify CDN is enabled
- Review Core Web Vitals in Netlify dashboard

## Performance Monitoring

### Netlify Analytics
- Enable in Site settings > Analytics
- Monitor page views and performance

### Lighthouse Scores
- Run Lighthouse audit
- Target 90+ scores across all metrics

## Support

For deployment issues:
1. Check Netlify documentation
2. Review build logs
3. Contact Netlify support

For site-specific issues:
- Review `README.md`
- Check `src/App.jsx` for configuration
- Verify all assets are included in build
