#!/bin/sh
npx greenlock init --config-dir ./greenlock.d --maintainer-email 'vil@subdomain.perma.online'
npx greenlock add --subject subdomain.perma.online --altnames subdomain.perma.online
npm start