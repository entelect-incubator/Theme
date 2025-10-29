@echo off
REM Setup and build Tailwind CSS for Pezza Theme

echo.
echo ========================================
echo  Pezza Theme - Tailwind CSS Setup
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js found:
node --version
echo.

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: npm is not installed!
    pause
    exit /b 1
)

echo ✅ npm found:
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
echo.
npm install

if %errorlevel% neq 0 (
    echo ❌ Installation failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ Setup Complete!
echo ========================================
echo.
echo Available commands:
echo   npm run dev     - Watch for changes and rebuild CSS
echo   npm run build   - Build CSS for production
echo   npm run serve   - Start local server on port 8000
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Open: http://localhost:8000
echo.
pause
