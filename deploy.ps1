# Freshozz Deployment Script
Write-Host "🚀 Deploying Freshozz Website..." -ForegroundColor Green

# Check if git is initialized
if (-Not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - Freshozz website with premium animations"
    git branch -M main
    
    Write-Host ""
    Write-Host "⚠️  IMPORTANT: Add your GitHub repository URL" -ForegroundColor Yellow
    Write-Host "Run this command with YOUR GitHub username:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "git remote add origin https://github.com/YOUR_USERNAME/freshozz-website.git" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "Then go to vercel.com to deploy!" -ForegroundColor Green
} else {
    Write-Host "Git already initialized. Pushing updates..." -ForegroundColor Yellow
    git add .
    git commit -m "Update Freshozz website"
    git push
    Write-Host "✅ Pushed to GitHub! Vercel will auto-deploy." -ForegroundColor Green
}

Write-Host ""
Write-Host "📖 Read DEPLOYMENT_GUIDE.md for full instructions" -ForegroundColor Cyan
