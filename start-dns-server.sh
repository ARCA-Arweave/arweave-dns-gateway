#!/bin/sh
cd greenlock-manager & npm install & npm run build
cd ..
npm install
npx greenlock init --config-dir ./greenlock-manager --maintainer-email 'vilenarious@gmail.com'
npx greenlock add --subject dns.perma.online --altnames dns.perma.online
npm start
