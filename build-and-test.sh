#!/bin/bash

# Code IO Website - Build and Test Script
echo "🚀 Building Code IO Website for Deployment..."

# Navigate to frontend directory
cd /app/frontend

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

# Build the project
echo "🔨 Building project..."
yarn build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in: /app/frontend/build"
    echo ""
    echo "🌐 Ready for deployment!"
    echo "📋 Options:"
    echo "  1. Deploy to Netlify via Git (recommended)"
    echo "  2. Drag & drop 'build' folder to netlify.com"
    echo "  3. Use Netlify CLI: netlify deploy --prod --dir=build"
    echo ""
    echo "📧 Contact form will work automatically with Netlify Forms"
    echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
else
    echo "❌ Build failed. Please check errors above."
    exit 1
fi
