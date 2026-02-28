#!/bin/bash

# ╔══════════════════════════════════════════════════════════════════════╗
# ║     FLASHFENDER COMPLETE DEPLOYMENT PACKAGE                        ║
# ║     Website + Link Tracking System                                 ║
# ╚══════════════════════════════════════════════════════════════════════╝

set -e

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║     FLASHFENDER - FULL DEPLOYMENT PACKAGE                          ║"
echo "║     Website + Link Tracking System                                 ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_VERSION="1.0"
DEPLOY_DATE=$(date +"%Y-%m-%d %H:%M:%S")

echo -e "${GREEN}[INFO]${NC} FlashFender Deployment Package"
echo -e "${GREEN}[INFO]${NC} Version: $SCRIPT_VERSION"
echo -e "${GREEN}[INFO]${NC} Date: $DEPLOY_DATE"
echo ""

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 1: PREREQUISITES CHECK                                         │
# └─────────────────────────────────────────────────────────────────────┘
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 1: Checking Prerequisites"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "  ✓ $1: $(which $1)"
    else
        echo -e "  ✗ $1: NOT FOUND"
        MISSING=true
    fi
}

MISSING=false
check_command "node"
check_command "npm"
check_command "nginx"
check_command "systemctl"

if [ "$MISSING" = true ]; then
    echo ""
    echo -e "${YELLOW}[WARNING]${NC} Some dependencies are missing. Install them first."
    echo ""
fi

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 2: INSTALL DEPENDENCIES                                        │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 2: Installing Dependencies"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "package.json" ]; then
    echo -e "${GREEN}[INFO]${NC} Running npm install..."
    npm install
    echo -e "${GREEN}[✓]${NC} Dependencies installed"
else
    echo -e "${RED}[ERROR]${NC} package.json not found!"
    exit 1
fi

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 3: BUILD APPLICATION                                           │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 3: Building Application"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "package.json" ]; then
    echo -e "${GREEN}[INFO]${NC} Running npm run build..."
    npm run build
    echo -e "${GREEN}[✓]${NC} Build complete"
else
    echo -e "${RED}[ERROR]${NC} package.json not found!"
    exit 1
fi

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 4: NGINX CONFIGURATION                                         │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 4: Nginx Configuration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

read -p "Enter your domain name (e.g., flashfender.com): " DOMAIN

cat > /etc/nginx/sites-available/$DOMAIN.conf << EOF
server {
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if (\$host = www.$DOMAIN) {
        return 301 https://\$host\$request_uri;
    }
    if (\$host = $DOMAIN) {
        return 301 https://\$host\$request_uri;
    }
    server_name $DOMAIN www.$DOMAIN;
    listen 80;
    return 404;
}
EOF

ln -sf /etc/nginx/sites-available/$DOMAIN.conf /etc/nginx/sites-enabled/
nginx -t

echo -e "${GREEN}[✓]${NC} Nginx configured for $DOMAIN"

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 5: SSL CERTIFICATE                                            │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 5: SSL Certificate (Let's Encrypt)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

read -p "Enter email for SSL certificate: " SSL_EMAIL

echo -e "${YELLOW}[INFO]${NC} Obtaining SSL certificate..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN \
    --non-interactive --agree-tos --email $SSL_EMAIL

echo -e "${GREEN}[✓]${NC} SSL certificate installed"

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 6: SETUP SYSTEMD SERVICE                                      │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 6: Setting up Systemd Service"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

cat > /etc/systemd/system/flashfender.service << EOF
[Unit]
Description=FlashFender Next.js App
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$(pwd)
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
Environment=PORT=3000
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable flashfender
systemctl start flashfender

sleep 3

if systemctl is-active --quiet flashfender; then
    echo -e "${GREEN}[✓]${NC} Service started successfully"
else
    echo -e "${RED}[ERROR]${NC} Service failed to start!"
    exit 1
fi

# ┌─────────────────────────────────────────────────────────────────────┐
# │ STEP 7: CONFIGURE TRACKING SYSTEM PASSWORD                         │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 7: Tracking System Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

read -p "Set password for tracking dashboard: " TRACK_PASSWORD

curl -s -X POST http://localhost:3000/api/tracking/setup \
    -H "Content-Type: application/json" \
    -d "{\"password\":\"$TRACK_PASSWORD\"}"

echo -e "${GREEN}[✓]${NC} Tracking password set"

# ┌─────────────────────────────────────────────────────────────────────┐
# │ COMPLETION                                                         │
# └─────────────────────────────────────────────────────────────────────┘
echo ""
echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║                    DEPLOYMENT COMPLETE!                             ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "ACCESS INFORMATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  🌐 Website:        https://$DOMAIN"
echo "  📊 Dashboard:     https://$DOMAIN/tracking"
echo "  🔗 Tracking URL:   https://$DOMAIN/t/{CODE}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "USEFUL COMMANDS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  Restart service:    systemctl restart flashfender"
echo "  View logs:          journalctl -u flashfender -f"
echo "  Check status:       systemctl status flashfender"
echo "  Get tracking stats: curl -X POST http://localhost:3000/api/tracking/stats -H 'Content-Type: application/json' -d '{\"password\":\"$TRACK_PASSWORD\"}'"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}[SUCCESS]${NC} FlashFender is now live!"
echo ""
