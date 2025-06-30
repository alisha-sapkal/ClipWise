@echo off
echo Setting up reliable development environment for ClipWise...

REM Set environment variables for reliable file watching
set CHOKIDAR_USEPOLLING=true
set WATCHPACK_POLLING=true
set FAST_REFRESH=true
set NEXT_TELEMETRY_DISABLED=1
set NODE_ENV=development

REM Clear cache if it exists
if exist ".next" (
    echo Clearing .next cache...
    rmdir /s /q ".next"
)

echo Starting Next.js with turbo mode and reliable file watching...
echo Hot reload should now work consistently!

REM Start the development server
npm run dev:reliable 