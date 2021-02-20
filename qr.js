/* Copyright (C) 2021 Xzender Cage

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

NISA - Xzender Cage
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsasena/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 30000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.italic('NISAString Code Receiver')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('NISA String Your code: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ASENA_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('If you are installing Locale, you can start the bot with node bot.js
            atabilirsiniz.')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()