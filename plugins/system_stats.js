/* Copyright (C) 2021 Xzender Cage

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

NISA - Xzender Cage
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    if (Config.ALIVEMSG == 'default') {
        await message.client.sendMessage(message.jid,'```God bless NISA. The First Ai Service!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/xzendercage\n*Telegram Channel:* https://t.me/xzendercagebot' , MessageType.text);
    }
    else {
        await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by NISA Ai*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
