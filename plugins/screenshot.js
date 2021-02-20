/* Copyright (C) 2021 Xzender Cage

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

NISA - Xzender Cage
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('webss');

Asena.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://nurutomo.herokuapp.com/api/ssweb?delay=1000&url=${match[1]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by nisa'})

}));
