let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*📍 GRUPO OFICIAL*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ͙🐦‍⬛ㄔMłKλBØŦ-MÐ𖤍*
  ┃🧸❏ ${gp1}

   *_Max-bot OFC*
┃🧸❏  
   
   *_Grupo de NarutoBot-Ai_*
┃🧸❏ 

   *_Grupo Titanium - Team _*
┃❤️‍🔥❏  

   *_Canal Oficial_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029VagOLYjJP217bgUkT00N 

   *_Canal - _*
┃❤️‍🔥❏ 
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ꪶꪾ𝘿᪶𝙞ᷨ𝙖ᷞ𝙢ͣ𝙤᪶ͨ𝙣ᷜ𝙙ꫂৎ୭࠱࠭ ͟͞\n` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['⏤͟͞ू⃪ ፝͜M҉͏i̢ka̶B͡ơ̴t͜-͟M̸͢D̨͝🔥̨҉', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler