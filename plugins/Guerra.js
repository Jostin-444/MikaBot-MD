var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/gFXNrPX/file.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';





    m.react('🎮');

    let texto = `
╭┈┈ ๑❀๑ •*_GUERRA_*• ๑❀๑ ••:
│
│      ➤𝑬𝒏𝒄𝒂𝒓𝒈𝒂𝒅𝒙: 
│      ➤𝑴𝒐𝒅: 
│      ➤𝑯𝒐𝒓𝒂:
│ㅤ➤𝑱𝒖𝒈𝒂𝒅𝒐𝒓𝒙𝒔:
│
│ㅤ🤴 ▸
│ㅤ🪖 ▸
│ㅤ🪖 ▸
│ㅤ🪖 ▸
╰───────────────๑❀๑ 
`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

}
handler.help = ['guerra']
handler.tags = ['ffvs']
handler.command = /^(guerra1|guerra)$/i
handler.admin = true
handler.group = true

export default handler