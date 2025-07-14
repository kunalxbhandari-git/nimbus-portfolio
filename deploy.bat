@echo off
echo 🚀 Starting deployment process...

echo 📦 Installing dependencies...
npm install

echo 🏗️ Building project with Vite...
npm run vite-build

if %errorlevel% == 0 (
    echo ✅ Build completed successfully!
    echo 📁 Build files are in the 'build' directory
) else (
    echo ❌ Build failed!
    exit /b 1
)

echo 🎉 Deployment preparation complete! 