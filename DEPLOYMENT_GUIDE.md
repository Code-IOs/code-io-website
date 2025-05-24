# Code IO Website - Netlify Deployment Guide

## 🚀 Quick Deployment Options

### Method 1: Git-Based Deployment (Recommended)

#### Step 1: Create GitHub Repository
```bash
# Navigate to project root
cd /app

# Initialize git repository
git init
git add .
git commit -m "Initial commit - Code IO website"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/code-io-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and log in
2. Click **"New site from Git"**
3. Choose **GitHub** (or your preferred Git provider)
4. Select your **code-io-website** repository
5. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `yarn build`
   - **Publish directory**: `build`
   - **Node.js version**: 20 (automatically detected from .nvmrc)
6. Click **"Deploy site"**

#### Step 3: Configure Site Settings
1. **Site name**: Change from random name to something like `code-io-website`
2. **Custom domain** (optional): Add your domain like `codeio.dev`
3. **Forms**: Enable form notifications in Site Settings > Forms

---

### Method 2: Manual Build & Deploy

#### Step 1: Build the Project
```bash
cd /app/frontend
yarn build
```

#### Step 2: Manual Deploy
1. Go to [netlify.com](https://netlify.com)
2. **Drag and drop** the `frontend/build` folder onto Netlify dashboard
3. Your site deploys instantly!

---

### Method 3: Netlify CLI

#### Step 1: Install CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Deploy
```bash
cd /app/frontend
yarn build
netlify login
netlify init
netlify deploy --prod
```

---

## 📧 Contact Form Setup

Your contact form is pre-configured for **Netlify Forms**:

✅ **Automatic Setup**: 
- Form submissions will appear in Netlify Dashboard > Forms
- Email notifications can be configured in site settings

✅ **Features Included**:
- Spam protection with honeypot field
- Success/error messaging
- Loading states
- Form validation

### Configure Email Notifications:
1. **Netlify Dashboard** > Your Site > **Settings** > **Forms**
2. **Form notifications** > **Email notification**
3. Add your email address to receive form submissions

---

## 🔧 Configuration Files Created

### `/app/frontend/public/_redirects`
- Handles client-side routing for React
- Redirects all routes to index.html

### `/app/frontend/netlify.toml`
- Build configuration
- Security headers
- Cache optimization

---

## 🌐 Custom Domain Setup (Optional)

### Step 1: Add Domain in Netlify
1. **Site settings** > **Domain management**
2. **Add custom domain**
3. Enter your domain (e.g., `codeio.dev`)

### Step 2: Configure DNS
Point your domain to Netlify:
- **A Record**: `75.2.60.5`
- **AAAA Record**: `2600:1f14:863:2700::2`

Or use Netlify DNS for easier management.

---

## 📊 Performance & SEO

✅ **Included Optimizations**:
- Automatic HTTPS
- CDN delivery
- Image optimization
- Minified CSS/JS
- Security headers
- Fast loading times

---

## 🔍 Post-Deployment Checklist

After deployment, verify:
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] Navigation works smoothly
- [ ] Contact form submits successfully
- [ ] Mobile responsiveness
- [ ] Page speed (should be 90+ on PageSpeed Insights)

---

## 🚨 Troubleshooting

### Common Issues:

**Build Fails:**
- Check Node.js version (18+ recommended)
- Verify `yarn build` works locally
- Check for missing dependencies

**Form Not Working:**
- Ensure form has `data-netlify="true"`
- Check form name matches hidden input
- Verify in Netlify Dashboard > Forms

**Images Not Loading:**
- All images use external URLs (Unsplash)
- Should work immediately after deployment

---

## 📞 Support

If you need help:
1. Check Netlify deploy logs
2. Test locally with `yarn build` and `serve -s build`
3. Verify all configurations match this guide

Your Code IO website is now ready for professional deployment! 🎉
