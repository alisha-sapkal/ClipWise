# ClipWise Client

This is the frontend client for ClipWise, built with Next.js 15 and React 19.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 RELIABLE HOT RELOAD SOLUTION (Windows)

**If you're tired of restarting the server every time you make changes, use this:**

### Option 1: PowerShell Script (Most Reliable)
```powershell
.\dev-reliable.ps1
```

### Option 2: Batch File
```cmd
dev-reliable.bat
```

### Option 3: NPM Script
```bash
npm run dev:reliable
```

**These solutions will ensure your changes appear immediately when you save files!**

## Alternative Solutions

If the above doesn't work, try these:

### Option 4: Windows-optimized script
```bash
npm run dev:windows
```

### Option 5: Fast refresh mode
```bash
npm run dev:fast
```

### Option 6: Manual environment variables
```bash
set CHOKIDAR_USEPOLLING=true && set WATCHPACK_POLLING=true && npm run dev
```

## Troubleshooting

### Hydration Mismatch Errors

If you encounter hydration mismatch errors (like `cz-shortcut-listen="true"`), this is typically caused by browser extensions. The layout has been configured with `suppressHydrationWarning={true}` to handle these cases.

### Hot Reload Issues

If changes are not reflecting in the UI after saving:

1. **Use the reliable development script (RECOMMENDED):**
   ```powershell
   .\dev-reliable.ps1
   ```

2. **Clear browser cache and hard refresh:**
   - Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

3. **Clear Next.js cache:**
   ```bash
   npm run dev:clean
   ```

4. **Check file system watching:**
   - The Next.js config includes optimized webpack watch options for Windows
   - Environment variables are set for polling-based file watching
   - Turbo mode is enabled for faster builds

5. **Restart the development server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev:reliable
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run dev:clean` - Clear cache and start development server
- `npm run dev:reliable` - **RECOMMENDED** - Start with turbo mode and reliable file watching
- `npm run dev:windows` - Start with Windows-optimized settings
- `npm run dev:fast` - Start with fast refresh enabled
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
