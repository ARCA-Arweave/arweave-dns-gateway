require('dotenv').config()
import { Webhook } from 'discord-webhook-node'
if(process.env.DISCORD_WEBHOOK_URL){
    const hook = new Webhook(process.env.DISCORD_WEBHOOK_URL)
    hook.setUsername('arca-dns')
    process.env.DISCORD_AVATAR && hook.setAvatar(process.env.DISCORD_AVATAR)
    hook.send('server started')
}


// @ts-ignore
import greenlock from "greenlock-express";

import * as path from "path";

import { app } from './app';

greenlock
.init({
    packageRoot: path.join(__dirname, '..' ),
    configDir: path.join(__dirname, '..', 'greenlock-manager'),
    maintainerEmail: "vilenarious@gmail.com",
    cluster: false,
    // debug: true,
})
// Serves on 80 and 443
// Get's SSL certificates magically!
.serve(app);
