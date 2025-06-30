# Windows Development Script for ClipWise
# This script sets up the proper environment for hot reload on Windows

Write-Host "Starting ClipWise development server with Windows-optimized settings..." -ForegroundColor Green

# Set environment variables for better file watching on Windows
$env:CHOKIDAR_USEPOLLING = "true"
$env:WATCHPACK_POLLING = "true"
$env:FAST_REFRESH = "true"
$env:NEXT_TELEMETRY_DISABLED = "1"

# Clear Next.js cache
if (Test-Path ".next") {
    Write-Host "Clearing .next cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force ".next"
}

# Start the development server
Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm run dev 