var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/jRj4vBR/file.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    // Verificar si se ingresaron suficientes argumentos (hora y modalidad)
    if (args.length < 2) return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` ⚜️\n\n*INGRESA UNA HORA Y UNA MODALIDAD*\n_Ejemplo: .guerra 10:00 guerra_');

    const hora = args[0]; // Primer texto (hora)
    const modalidad = args.slice(1).join(' '); // Segundo texto (modalidad), puede contener más de una palabra

    m.react('🎮');

    let yo = `│🕓 𝗛𝗢𝗥𝗔: *${hora}*`;
    let modo = `│🎮 𝗠𝗢𝗗𝗔𝗟𝗜𝗗𝗔𝗗: *${modalidad}*`;

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
handler.help = ['guerra <hora> <modalidad>']
handler.tags = ['ffguerra']
handler.command = /^(guerra1|guerra)$/i
handler.admin = true
handler.group = true

export default handler