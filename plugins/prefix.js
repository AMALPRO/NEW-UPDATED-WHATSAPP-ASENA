const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'sticker', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();   
await message.client.sendMessage "\nʜᴇʏ *{Mention}* ᴛʀʏ ᴛʏᴘɪɴɢ *{Handler}menu*\n";
await message.client.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "type !menu monu❤️ Amal Ser", 'jpegThumbnail': fs.readFileSync('./sticker/sticker.webp}}})
var i = Math.floor(31*Math.random())

await message.sendMessage(r_text[i]);

}));
