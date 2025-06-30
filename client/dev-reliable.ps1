# Reliable Development Script for ClipWise on Windows
# This script ensures hot reload works consistently

Write-Host "Setting up reliable development environment..." -ForegroundColor Green

# Set all necessary environment variables for reliable file watching
$env:CHOKIDAR_USEPOLLING = "true"
$env:WATCHPACK_POLLING = "true"
$env:FAST_REFRESH = "true"
$env:NEXT_TELEMETRY_DISABLED = "1"
$env:NODE_ENV = "development"

# Clear any existing cache
if (Test-Path ".next") {
    Write-Host "Clearing .next cache for fresh start..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force ".next"
}

# Clear node_modules cache if it exists
if (Test-Path "node_modules/.cache") {
    Write-Host "Clearing node_modules cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "node_modules/.cache"
}

Write-Host "Starting Next.js with turbo mode and reliable file watching..." -ForegroundColor Green
Write-Host "Hot reload should now work consistently!" -ForegroundColor Cyan

# Start the development server with turbo mode
npm run dev:reliable 