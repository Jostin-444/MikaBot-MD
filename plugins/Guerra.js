var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/RzcdgWZ/file.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    // Verificar si se ingresaron suficientes argumentos (hora y modalidad)
    if (args.length < 2) return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` ⚜️\n\n*INGRESA UNA HORA Y UNA MODALIDAD*\n_Ejemplo: .6vs6 10:00 Infinito_');

    const hora = args[0]; // Primer texto (hora)
    const modalidad = args.slice(1).join(' '); // Segundo texto (modalidad), puede contener más de una palabra

    m.react('🎮');

    let yo = `│🕓 𝗛𝗢𝗥𝗔: *${hora}*`;
    let modo = `│🎮 𝗠𝗢𝗗𝗔𝗟𝗜𝗗𝗔𝗗: *${modalidad}*`;



    m.react('🎮');

    let texto = `
╭┈┈ ๑❀๑ •*_GUERRA_*• ๑❀๑ ••:
│
│      ➤𝑬𝒏𝒄𝒂𝒓𝒈𝒂𝒅𝒙: 
│      ➤𝑴𝒐𝒅: 
│      ➤𝑯𝒐𝒓𝒂:${hora} ${mod} 
│ㅤ
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