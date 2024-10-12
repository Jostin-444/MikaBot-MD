var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/jRj4vBR/file.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    

    m.react('🎮');

    

    let texto = `
╭┈┈ ๑❀๑ •𝙂𝙐𝙀𝙍𝙍𝘼• ๑❀๑ ••:
│
${yo} 
${modo}      
│      
│
│ㅤ➤𝑱𝒖𝒈𝒂𝒅𝒐𝒓𝒙𝒔:
│
│ㅤ🥷 ▸
│ㅤ🪖 ▸
│ㅤ🪖 ▸
│ㅤ🪖 ▸
│
│ㅤ➤𝑺𝒖𝒑𝒍𝒆𝒏𝒕𝒆𝒔:
│
│ㅤ⚜️ ▸
│ㅤ⚜️ ▸
│
│   ➤ 𝑫𝒐𝒏𝒂𝒅𝒐𝒓/𝒂 𝒅𝒆 𝒔𝒂𝒍𝒂:
│
╰───────────────๑❀๑ 
`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

}
handler.help = ['guerra']
handler.tags = ['ffguerra']
handler.command = /^(guerra1|guerra)$/i
handler.admin = true
handler.group = true

export default handler