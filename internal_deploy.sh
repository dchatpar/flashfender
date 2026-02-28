#!/bin/bash
set -e

cd /var/www/html

echo "Stopping existing node processes..."
pkill -f "next-server" || true
pkill -f "npm start" || true

echo "Unzipping deployment package..."
unzip -o deploy_package.zip

echo "Installing dependencies..."
npm install

echo "Building application..."
npm run build

echo "Starting application..."
# We will use pm2 if available, otherwise npm start in background
if command -v pm2 &> /dev/null; then
    pm2 delete flashfender || true
    pm2 start npm --name "flashfender" -- start
    pm2 save
else
    echo "PM2 not found, using nohup..."
    nohup npm start > /var/log/flashfender.log 2>&1 &
fi

echo "Deployment inside container complete."
