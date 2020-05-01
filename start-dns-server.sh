#!/bin/sh
npx greenlock init --config-dir ./greenlock.d --maintainer-email 'vilenarious@gmail.com'
npx greenlock add --subject dns.perma.online --altnames dns.perma.online
npm start