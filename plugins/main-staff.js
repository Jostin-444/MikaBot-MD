let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🐦‍⬛ *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Diamond
🐦‍⬛ *Rol:* Propietario
🚩 *Número:* wa.me/50242073893
✨️ *GitHub:* https://github.com/Jostin-444

🐦‍⬛  *Colaboradores:* 🐦‍⬛

• Giovanni-OFC
🌟 *Rol:* Developer
🚩 *Número:* Wa.me/51902855352

• Keni
🌟 *Rol:* Contribuidor
🚩 *Número:* Wa.me/5493816457465

• Jostin-444
🌟 *Rol:* Editor
🚩 *Número:* Wa.me/50242073893 
`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
