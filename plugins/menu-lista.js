//Codigo creado por David Chian wa.me/50242073893
import fs from 'fs';
import { xpRange } from '../lib/levelling.js';
const { levelling } = '../lib/levelling.js';
import moment from 'moment-timezone';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    let locale = 'es';
    let d = new Date(new Date() + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime); 
    let wm = global.wm;
    let vs = global.vs;
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let { min, xp, max } = xpRange(level, global.multiplier);
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    let name = await conn.getName(m.sender);
    let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://qu.ax/LOAm.jpg')
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2024,
    status: 1,
    surface : 1,
    message: `Hola ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(pp)).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./Menu.jpg'), thumbnail: fs.readFileSync('./Menu.jpg'),sendEphemeral: true}}}
   let txt = '╭─╮︹︹⊹︹︹⊹︹︹⊹︹︹╭─╮\n    ⚘݄𖠵⃕⁖𖥔͢Menu ꪶ͢𝑩𝒐𝒕⋆᭄͙̈\n╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝'
    let interactiveMessage = {
        header: { title: '> 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝒂𝒍 𝑴𝑬𝑵𝑼-𝑳𝑰𝑺𝑻𝑨                                      ⏤͟͞MłKλBØŦ-MÐ' },
        hasMediaAttachment: true,
        body: { text: `╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌻⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐇𝐨𝐥𝐚: ${name}💖 \n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐨\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${uptime}⏱️\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${rtotalreg}🧩\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${rtotal}🌺\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐕𝐞𝐫𝐬𝐢𝐨́𝐧 𝐝𝐞𝐥 𝐛𝐨𝐭\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬3.0.1❤‍🔥\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐭𝐮 𝐥𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐮𝐬𝐚𝐫\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐝𝐞𝐥 𝐁𝐨𝐭 (๑˃̵　ᴗ　˂̵)و\n╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯ׂ` },
        nativeFlowMessage: {
            buttons: [
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: '𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢',
                        sections: [
                            {
                                title: 'Iɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ Bᴏᴛ', highlight_label: "Popular",
                                rows: [
{
title: "│🤴│ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ", 
description: "ɴᴜᴍᴇʀᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ᴅᴀᴠɪᴅ ᴄʜɪᴀɴ",
id: `${prefijo}owner`
},
{
title: "│🔥│ɢʀᴜᴘᴏs ᴏғᴄ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ᴍᴇɢᴜᴍɪɴ-ʙᴏᴛ",
id: `${prefijo}grupos`
},
{
title: "│❤️‍🔥│ᴇsᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ᴇsᴛᴀᴅᴏ ᴀᴄᴛᴜᴀʟ ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}estado`
},
{
title: "│❔│ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ᴍᴇɢᴜᴍɪɴ-ʙᴏᴛ",
id: `${prefijo}infobot`
},
{
title: "│🏆│ᴀᴘᴏʏᴀʀ ᴀʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ", 
description: "sɪ ᴛᴇ ɢᴜsᴛᴀ ᴇʟ ʙᴏᴛ ᴀǫᴜɪ ᴘᴏᴅʀᴀs ᴀʏᴜᴅᴀʀ ᴀ ʟᴏs ǫᴜᴇ ʜɪᴄɪᴇʀᴏɴ ᴇsᴛᴏ ᴘᴏsɪʙʟᴇ",
id: `${prefijo}donar`
},
{
title: "│🧩│ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ʟᴀs ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʟᴏs ᴄʀᴇᴀᴅᴏʀᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}cuentas`
},
{
title: "│🥂│sᴜʙʙᴏᴛs ᴀᴄᴛɪᴠᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ʙᴏᴛs (sᴜʙʙᴏᴛs) ᴀᴄᴛɪᴠᴏs ᴀᴄᴛᴜᴀʟᴍᴇɴᴛᴇ",
id: `${prefijo}bots`
}
]},
{
title: 'Sᴏʟᴜᴄɪᴏɴ ᴀ Eʀʀᴏʀᴇs', highlight_label: "Importante",
rows: [
{
title: "│🧊│ᴍᴇɴsᴀᴊᴇs ᴇɴ ᴇsᴘᴇʀᴀ", 
description: "ᴅɪsᴘᴏɴɪʙʟᴇ ᴘᴀʀᴀ ᴛᴏᴅᴏs ᴜsᴀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ sɪ ɴᴏ ᴘᴜᴇᴅᴇs ᴠᴇʀ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴅᴇʟ ʙᴏᴛ ᴏ ᴛᴇ sᴀʟᴇɴ ᴄᴏᴍᴏ ᴍᴇɴsᴀᴊᴇ ᴇɴ ᴇsᴘᴇʀᴀ",
id: `${prefijo}fixmsgespera`
},
{
title: "│🍹│ᴍᴇɴsᴀᴊᴇs ᴇɴ ᴇsᴘᴇʀᴀ (ᴏᴡɴᴇʀ)", 
description: "ᴅɪsᴘᴏɴɪʙʟᴇ sᴏʟᴏ ᴘᴀʀᴀ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ, sᴇ ᴜsᴀ ᴄᴜᴀɴᴅᴏ ɴᴏ sᴀʟᴇɴ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}ds`
}
]},
{
title: 'Mᴇɴᴜs ᴅᴇ Kᴏᴛᴏʀɪ-Bᴏᴛ', highlight_label: "Popular",
rows: [
{
title: "│✨│ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ ᴄᴏɴ ᴛᴏᴅᴀs ʟᴀs ғᴜɴᴄɪᴏɴᴇs ᴅᴇ ᴋᴏᴛᴏʀɪ-ʙᴏᴛ",
id: `${prefijo}menu`
},
{
title: "│🔮│ᴍᴇɴᴜ ᴀɴɪᴍᴇ", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴀɴɪᴍᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menuanimes`
},
{
title: "│🎮│ᴍᴇɴᴜ ᴊᴜᴇɢᴏs", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴊᴜᴇɢᴏs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menujuegos`
},
{
title: "│🎼│ᴍᴇɴᴜ ᴀᴜᴅɪᴏs", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴀᴜᴅɪᴏs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menuaudios`
},
{
title: "│💦│ᴍᴇɴᴜ ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾 ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}hornymenu`
},
{
title: "│⚡│ᴍᴇɴᴜ ᴏᴡɴᴇʀ", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menuowner`
}
]},
{
title: 'Sᴇʀ ʙᴏᴛ Jᴀᴅɪʙᴏᴛ', highlight_label: "SerSubbot",
rows: [
{
title: "│🔗│ʙᴏᴛᴄʟᴏɴᴇ", 
description: "ᴄᴏɴᴠɪᴇ́ʀᴛᴇᴛᴇ ᴇɴ ᴜɴ ᴄʟᴏɴ ᴅᴇ ᴇsᴛᴇ ɪɴᴄʀᴇɪ́ʙʟᴇ ʙᴏᴛ ᴇsᴄᴀɴᴇᴀɴᴅᴏ ᴜɴ ǫʀ ᴇɴ ᴛᴜ ᴡʜᴀᴛsᴀᴘᴘ",
id: `${prefijo}serbot`
},
{
title: "│🗑│ᴅᴇʟᴇᴛᴇʙᴏᴛ", 
description: "ᴇʟɪᴍɪɴᴀ ᴛᴜ ᴄᴏᴘɪᴀ (sᴜʙʙᴏᴛ) ᴅᴇ ᴍᴇɢᴜᴍɪɴ-ʙᴏᴛ",
id: `${prefijo}deletebot`
},
{
title: "│🔗│sᴛᴏᴘ ᴍʏ sᴜʙʙᴏᴛ", 
description: "ᴅᴇᴛᴇɴ ᴅᴇ ғᴏʀᴍᴀ ᴛᴇᴍᴘᴏʀᴀʟ ᴛᴜ sᴜʙʙᴏᴛ",
id: `${prefijo}stop`
}
]},
{
title: 'Aᴄᴛɪᴠᴀʀ ᴏ Dᴇsᴀᴄᴛɪᴠᴀʀ', highlight_label: "Importantes",
rows: [
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs", 
description: "ᴀᴄᴛɪᴠᴀ ʟᴀs ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴘᴀʀᴀ ǫᴜᴇ ᴇsᴛᴇ ᴘᴜᴇᴅᴀ ᴀᴅᴍɪɴɪsᴛʀᴀʀ ᴍᴇᴊᴏʀ ʟᴏs ɢʀᴜᴘᴏs (sᴏʟᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ)",
id: `${prefijo}enable restrict`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ʟᴀs ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ ɴᴏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs (sᴏʟᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ)",
id: `${prefijo}disable restrict`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴡᴇʟᴄᴏᴍᴇ", 
description: "ᴀᴄᴛɪᴠᴀ ᴇʟ ᴍᴇɴsᴀᴊᴇ ᴅᴇ ʙɪᴇɴᴠᴇɴɪᴅᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable welcome`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴡᴇʟᴄᴏᴍᴇ", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ᴇʟ ᴍᴇɴsᴀᴊᴇ ᴅᴇ ʙɪᴇɴᴠᴇɴɪᴅᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable welcome`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏʜᴏʀɴʏ", 
description: "ᴀᴄᴛɪᴠᴀ ʏ ᴘᴇʀᴍɪᴛᴇ ǫᴜᴇ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴘᴜᴇᴅᴀɴ ᴜsᴀʀ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾 ᴅᴇʟ ʙᴏᴛ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable modohorny`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏʜᴏʀɴʏ", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ʏ ᴇᴠɪᴛᴀ ǫᴜᴇ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴘᴜᴇᴅᴀɴ ᴜsᴀʀ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾 ᴅᴇʟ ʙᴏᴛ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable modohorny`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ",
description: "ᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ, ᴇʟ ʙᴏᴛ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴍᴀɴᴅᴇɴ ʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏs ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antilink`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ, ᴇʟ ʙᴏᴛ ɴᴏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇɴ ʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏs ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antilink`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ𝟸", 
description: "ᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ𝟸, ᴇʟ ʙᴏᴛ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴍᴀɴᴅᴇɴ ᴄᴜᴀʟǫᴜɪᴇʀ ʟɪɴᴋ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antilink2`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ𝟸", 
description: "ᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ𝟸, ᴇʟ ʙᴏᴛ ɴᴏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇɴ ᴄᴜᴀʟᴏ̨ᴜɪᴇʀ ʟɪɴᴋ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antilink2`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴅᴇᴛᴇᴄᴛ", 
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ ʏ ɪɴғᴏʀᴍᴀʀᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴀᴄᴇʀᴄᴀ ᴅᴇ ᴄᴜᴀʟǫᴜɪᴇʀ ᴀᴄᴛɪᴠɪᴅᴀᴅ ᴇɴ ʟᴀ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ɢʀᴜᴘᴏ ᴇᴊᴇᴍᴘʟᴏ ᴄᴜᴀɴᴅᴏ sᴇ ᴘʀᴏᴍᴜᴇᴠᴇ ᴜɴ ɴᴜᴇᴠᴏ ᴀᴅᴍɪɴ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable detect`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴅᴇᴛᴇᴄᴛ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ ɴɪ ɪɴғᴏʀᴍᴀʀᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴀᴄᴇʀᴄᴀ ᴅᴇ ᴄᴜᴀʟᴏ̨ᴜɪᴇʀ ᴀᴄᴛɪᴠɪᴅᴀᴅ ᴇɴ ʟᴀ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable detect`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴅɪᴏs",
description: "sᴇ ᴀᴄᴛɪᴠᴀʀᴀ́ɴ ʟᴏs ᴀᴜᴅɪᴏs ᴅᴇʟ ʙᴏᴛ,ʀᴇᴄᴏᴍᴇɴᴅᴀʙʟᴇ ɴᴏ ʜᴀᴄᴇʀ sᴘᴀᴍ ᴅᴇ ᴇsᴛᴏs ᴀᴜᴅɪᴏs, ᴘᴀʀᴀ ᴍᴀs ɪɴғᴏʀᴍᴀᴄɪᴏ́ɴ ᴜsᴇ !ᴍᴇɴᴜ𝟸 (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable audios`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴅɪᴏs", 
description: "sᴇ ᴅᴇsᴀᴄᴛɪᴠᴀʀᴀ́ɴ ʟᴏs ᴀᴜᴅɪᴏs ᴅᴇʟ ʙᴏᴛ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable audios`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ",
description: "ᴇʟ ʙᴏᴛ ᴇɴᴠɪᴀʀᴀ́ ᴀᴜᴛᴏᴍᴀ́ᴛɪᴄᴀᴍᴇɴᴛᴇ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀ ᴄᴜᴀʟǫᴜɪᴇʀ ɪᴍᴀɢᴇɴ ɢɪғ ᴏ ᴠɪᴅᴇᴏ(𝟽 sᴇɢᴜɴᴅᴏs), ʀᴇᴄᴏᴍᴇɴᴅᴀʙʟᴇ ɴᴏ ʜᴀᴄᴇʀ sᴘᴀᴍ ᴄᴏɴ ᴇsᴛᴀ ғᴜɴᴄɪᴏɴ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable autosticker`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴇɴᴠɪᴀʀᴀ́ ᴀᴜᴛᴏᴍᴀ́ᴛɪᴄᴀᴍᴇɴᴛᴇ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀ ᴄᴜᴀʟᴏ̨ᴜɪᴇʀ ɪᴍᴀɢᴇɴ ɢɪғ ᴏ ᴠɪᴅᴇᴏ ᴜsᴀʀᴀɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ !s ᴘᴀʀᴀ ᴇsᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable autosticker`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ", 
description: "ᴇʟ ʙᴏᴛ ʀᴇᴇɴᴠɪᴀʀᴀ ᴇʟ ᴀʀᴄʜɪᴠᴏ ǫᴜᴇ ᴍᴀɴᴅᴇɴ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ ᴠɪᴇᴡᴏɴᴄᴇ(ᴠᴇʀ ᴜɴᴀ ᴠᴇᴢ) ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antiviewonce`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ʀᴇᴇɴᴠɪᴀʀᴀ ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇɴ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ ᴠɪᴇᴡᴏɴᴄᴇ(ᴠᴇʀ ᴜɴᴀ ᴠᴇᴢ) ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antiviewonce`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛᴏxɪᴄ",
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ʏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇ ᴍᴀʟᴀs ᴘᴀʟᴀʙʀᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ɢᴀʏs)",
id: `${prefijo}enable antitoxic`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛᴏxɪᴄ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ɴɪ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇ ᴍᴀʟᴀs ᴘᴀʟᴀʙʀᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antitoxic`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ", 
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ʏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀʟ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴍᴀɴᴅᴇ ᴛʀᴀʙᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antitraba`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ɴɪ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀʟ ᴜsᴜᴀʀɪᴏ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇ ᴛʀᴀʙᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antitraba`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴀʀᴀʙᴇs", 
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ʏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴀ́ʀᴀʙᴇs ǫᴜᴇ ɪɴᴛᴇɴᴛᴇɴ ᴇɴᴛʀᴀʀ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antiarabes`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴀʀᴀʙᴇs", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ɴɪ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴀ́ʀᴀʙᴇs ᴏ̨ᴜᴇ ᴇɴᴛʀᴇɴ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antiarabes`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏᴀᴅᴍɪɴ", 
description: "ᴇʟ ʙᴏᴛ sᴏʟᴏ ʀᴇsᴘᴏɴᴅᴇʀᴀ́ ᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable modoadmin`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏᴀᴅᴍɪɴ", 
description: "ᴇʟ ʙᴏᴛ ʀᴇsᴘᴏɴᴅᴇʀᴀ́ ᴀ ᴛᴏᴅᴏs ʟʟs ᴜsᴜᴀʀɪᴏs ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable modoadmin`
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ", 
description: "ᴇʟ ʙᴏᴛ ᴍᴏsᴛʀᴀʀᴀ́ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴇʟɪᴍɪɴᴀᴅᴏs ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antidelete`
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴍᴏsᴛʀᴀʀᴀ́ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴇʟɪᴍɪɴᴀᴅᴏs ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antidelete`
}
]},
{
title: 'Gʀᴜᴘᴏs', highlight_label: "hot",
rows: [
{
title: "│📄│ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ", 
description: "ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏ́ɴ ᴅᴇʟ ɢʀᴜᴘᴏ",
id: `${prefijo}infogroup`
},
{
title: "│🍻│ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ", 
description: "ᴏʙᴛᴇɴ ᴅᴇ ғᴏʀᴍᴀ ʀᴀᴘɪᴅᴀ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ",
id: `${prefijo}link`
},
{
title: "│🔏│ʀᴇᴇsᴛᴀʙʟᴇsᴇʀ ʟɪɴᴋ", 
description: "ʀᴇsᴛᴀʙʟᴇᴄᴇ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}resetlink`
},
{
title: "│⚠️│ʟɪsᴛᴀ ᴅᴇ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs", 
description: "ᴏʙᴛᴇɴ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴛɪᴇɴᴇɴ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴇɴ ᴇʟ ɢʀᴜᴘᴏ",
id: `${prefijo}listwarn`
},
{
title: "│📢│ɪɴᴠᴏᴄᴀʀ ɢʀᴜᴘᴏ", 
description: "ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛᴇs ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}tagall`
},
{
title: "│🔓│ᴀʙʀɪʀ ᴇʟ ɢʀᴜᴘᴏ", 
description: "ʜᴀʙʀᴇ ᴇʟ ɢʀᴜᴘᴏ ʏ ᴘᴇʀᴍɪᴛᴇ ǫᴜᴇ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛᴇs ʜᴀʙʟᴇɴ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}grupo on`
},
{
title: "│🔐│ᴄᴇʀʀᴀʀ ᴇʟ ɢʀᴜᴘᴏ", 
description: "ᴄɪᴇʀʀᴀ ᴇʟ ɢʀᴜᴘᴏ ᴅᴇ ᴍᴏᴅᴏ ᴛᴀʟ ǫᴜᴇ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇɴ ʜᴀʙʟᴀʀ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}grupo cerrar`
}
]},
{
title: 'Fʀᴀsᴇs ʏ Tᴇxᴛᴏs', highlight_label: "♡",
rows: [
{
title: "│🍹│ᴘɪʀᴏᴘᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴ ᴘɪʀᴏᴘᴏ",
id: `${prefijo}piropo`
},
{
title: "│✌│ᴄᴏɴsᴇᴊᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴ ᴄᴏɴsᴇᴊᴏ",
id: `${prefijo}consejo`
},
{
title: "│🥰│ғʀᴀsᴇ ʀᴏᴍᴀɴᴛɪᴄᴀ", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ғʀᴀsᴇ ʀᴏᴍᴀɴᴛɪᴄᴀ",
id: `${prefijo}fraseromantica`
},
{
title: "│💕│ʜɪsᴛᴏʀɪᴀ ʀᴏᴍᴀɴᴛɪᴄᴀ", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ᴘᴇǫᴜᴇɴ̃ᴀ ʜɪsᴛᴏʀɪᴀ ʀᴏᴍᴀɴᴛɪᴄᴀ",
id: `${prefijo}historiaromantica`
}
]},
{
title: 'Rᴀɴᴅᴏᴍ',
rows: [
{
title: "│🏞│ᴀᴠᴇɴᴛᴜʀᴀ", 
description: "ᴅɪʀɪ́ɢᴇᴛᴇ ᴀ ᴜɴᴀ ɢʀᴀɴ ᴀᴠᴇɴᴛᴜʀᴀ ʏ ɢᴀɴᴀ ᴜɴᴀ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴘᴏʀ ᴇʟʟᴏ",
id: `${prefijo}adventure`
},
{
title: "│🏹│ᴄᴀᴢᴀʀ", 
description: "sᴀʟ ᴅᴇ ᴄᴀᴢᴀ ʏ ɢᴀɴᴀ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ",
id: `${prefijo}cazar`
},
{
title: "│🎲│ᴄᴏғʀᴇ", 
description: "ʜᴀʙʀᴇ́ ᴜɴ ᴄᴏғʀᴇ ʏ ᴏʙᴛᴇɴ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ",
id: `${prefijo}cofre`
},
{
title: "│⚖️│ʙᴀʟᴀɴᴄᴇ", 
description: "ᴏʙsᴇʀᴠᴀ ʟᴏ ǫᴜᴇ ᴛɪᴇɴᴇs ᴇɴ ᴛᴜ ɪɴᴠᴇɴᴛsʀɪᴏ",
id: `${prefijo}balance`
},
{
title: "│💰│ᴄʟᴀɪᴍ", 
description: "ᴏʙᴛᴇɴ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ",
id: `${prefijo}claim`
},
{
title: "│🩹│ʜᴇᴀʟ", 
description: "ᴏʙᴛᴇɴ ᴛᴜ ᴇsᴛᴀᴅᴏ ᴅᴇ ᴠɪᴅᴀ ᴀᴄᴛᴜᴀʟ",
id: `${prefijo}heal`
},
{
title: "│💯│ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ", 
description: "ᴏʙsᴇʀᴠᴀ ᴇʟ ᴛᴏᴘ𝟷𝟶 ᴜsᴜᴀʀɪᴏs ᴄᴏɴ ᴍᴀs xᴘ ʏ ᴄᴏᴍᴘᴀʀᴀ ᴛᴜ ʟᴜɢᴀʀ",
id: `${prefijo}lb`
},
{
title: "│🌀│ʟᴇᴠᴇʟᴜᴘ", 
description: "sᴜʙᴇ ᴅᴇ ɴɪᴠᴇʟ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀᴍᴇɴᴛᴇ sɪ ᴛɪᴇɴᴇs ᴇʟ xᴘ sᴜғɪᴄɪᴇɴᴛᴇ",
id: `${prefijo}levelup`
},
{
title: "│👤│ᴘᴇʀғɪʟ", 
description: "ᴇᴄʜᴀ ᴜɴ ᴠɪsᴛᴀsᴏ ᴀ ᴛᴜ ᴘᴇʀғɪʟ",
id: `${prefijo}perfil`
},
{
title: "│🔧│ᴡᴏʀᴋ", 
description: "ᴛʀᴀʙᴀᴊᴀ ʏ ɢᴀɴᴀ ᴛᴜ ᴍᴇʀᴇᴄɪᴅᴀ ʀᴇᴄᴏᴍᴘᴇɴsᴀ",
id: `${prefijo}work`
},
{
title: "│⛏️│ᴍɪɴᴀʀ", 
description: "ɢᴀɴᴀ xᴘ ᴅᴇ ғᴏʀᴍᴀ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀ",
id: `${prefijo}minar`
},
{
title: "│💣│ᴍɪɴᴀʀ 𝟸", 
description: "ɢᴀɴᴀ ᴇsᴛʀᴇʟʟᴀs ʏ ᴏʙᴛᴇɴ ᴜɴ ʙᴏɴᴏ ᴅᴇ ғᴏʀᴍᴀ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀ",
id: `${prefijo}minar2`
},
{
title: "│💵│ʙᴜʏ", 
description: "ᴄᴏᴍᴘʀᴀ ᴇsᴛʀᴇʟʟᴀs ᴜsᴀɴᴅᴏ ᴛᴜ xᴘ (ᴜsᴏ ɴᴏʀᴍᴀʟ !ʙᴜʏ + ᴄᴀɴᴛɪᴅᴀᴅ)",
id: `${prefijo}buy`
},
{
title: "│💸│ʙᴜʏ ᴀʟʟ", 
description: "ᴄᴏᴍᴘʀᴀ ᴅᴇ ғᴏʀɴᴀ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀ ᴛᴏᴅᴏ ᴇʟ ᴇsᴛʀᴇʟʟᴀs ǫᴜᴇ ᴘᴜᴇᴅᴀs ᴜsᴀɴᴅᴏ ᴛᴏᴅᴏ ᴛᴜ xᴘ",
id: `${prefijo}buyall`
}
                                ]
                            }
                        ]
                    })
                }
            ],
            messageParamsJson: ''
        }
    };
    function _0x2daf() {
    const _0x4c1076 = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './Menu.jpg', '1019845zOpQQK', 'pdf', 'chat'];
    _0x2daf = function() {
        return _0x4c1076;
    };
    return _0x2daf();
}
const _0x110137 = _0x13bb;
(function(_0x14d3d7, _0x67b65e) {
    const _0x3a56bf = {
            _0x2e964c: 0x1b0,
            _0x4fc539: 0x1bd,
            _0x2a1845: 0x1b1,
            _0x2b6724: 0x1b3,
            _0x4293cc: 0x1b8,
            _0x59080a: 0x1b9
        },
        _0x30692c = _0x13bb,
        _0x119b1c = _0x14d3d7();
    while (!![]) {
        try {
            const _0x181128 = parseInt(_0x30692c(0x1bb)) / 0x1 * (parseInt(_0x30692c(_0x3a56bf._0x2e964c)) / 0x2) + parseInt(_0x30692c(_0x3a56bf._0x4fc539)) / 0x3 + parseInt(_0x30692c(_0x3a56bf._0x2a1845)) / 0x4 + parseInt(_0x30692c(_0x3a56bf._0x2b6724)) / 0x5 * (parseInt(_0x30692c(0x1bc)) / 0x6) + -parseInt(_0x30692c(0x1ad)) / 0x7 + -parseInt(_0x30692c(0x1be)) / 0x8 + parseInt(_0x30692c(_0x3a56bf._0x4293cc)) / 0x9 * (-parseInt(_0x30692c(_0x3a56bf._0x59080a)) / 0xa);
            if (_0x181128 === _0x67b65e) break;
            else _0x119b1c['push'](_0x119b1c['shift']());
        } catch (_0x1caf7d) {
            _0x119b1c['push'](_0x119b1c['shift']());
        }
    }
}(_0x2daf, 0x235d2));

function _0x13bb(_0x16c7de, _0x1a27b8) {
const _0x2dafbc = _0x2daf();
return _0x13bb = function(_0x13bbaf, _0x156d41) {
_0x13bbaf = _0x13bbaf - 0x1ad;
let _0x1a2b8a = _0x2dafbc[_0x13bbaf];
return _0x1a2b8a;
}, _0x13bb(_0x16c7de, _0x1a27b8);
}
let ti1 = '𝐸𝑥𝑝𝑙𝑜𝑠𝑖𝑜𝑛!!'
let ti2 = '𝐻𝑜𝑙𝑎!!'
let ti3 = 'MłKλBØŦ-MÐ'
let ti4 = '͟͞ 𓆩ꪶꪾ𝘿᪶𝙞ᷨ𝙖ᷞ𝙢ͣ𝙤᪶ͨ𝙣ᷜ𝙙ꫂৎ୭࠱࠭ ͟͞'
let ti5 = '𝐵𝑂𝑂𝑀𝑀!!!!'
let ti6 = '𝐸𝑙 𝐵𝑜𝑡 𝑀𝑎𝑠 𝐸𝑥𝑝𝑜𝑠𝑖𝑣𝑜!'
let ti = `${pickRandom([ti1,ti2,ti3,ti4,ti5,ti6])}`
let buttonMessage = {
    'document': {
        'url': md
    },
    'mimetype': td,
    'fileName': 'E X P L O S I Ó N',
    'fileLength': '99999999999999',
    'pageCount': '999',
    'contextInfo': {
    'externalAdReply': {
    'showAdAttribution': !![],
            'mediaType': 0x1,
            'previewType': "PHOTO",
            'title':  ti,
            'thumbnail': global.photoSity.getRandom(),
            'renderLargerThumbnail': !![],
            'sourceUrl': redes
        }
    },
    'caption': txt.trim()
}
await conn[_0x110137(0x1ba)](m[_0x110137(0x1b5)], buttonMessage, { 'quoted': ftrol })

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage,
            },
        },
    }, { userJid: conn.user.jid, quoted: fkontak });
      
    conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}

handler.help = ['en', 'dis'].map(v => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = ['menulista','lista','listmenu','menulist'];
handler.exp = 20;

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}