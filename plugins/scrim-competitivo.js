var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/VCSV6mM/file.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    // Verificar si se ingresaron suficientes argumentos (hora) (return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` ⚜️\n\n*INGRESA UNA HORA*\n_Ejemplo: .guerra 10PM_');

    const hora = args[0]; // Primer texto (hora)

    m.react('🎮');

    let texto = ` ╭──────⚔──────╮
ㅤ𝐒𝐂𝐑𝐈𝐌𝐒 𝐂𝐎𝐌𝐏𝐄𝐓𝐈𝐓𝐈𝐕𝐎
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 ${hora} 
│ㅤ🇲🇽 𝐌𝐄𝐗 : 
│ㅤ🇨🇴 𝐂𝐎𝐋 : 
│➥ 𝐓𝐎𝐓𝐀𝐋 𝐒𝐀𝐋𝐀𝐒:
│➥ 𝐂𝐀𝐒𝐈𝐋𝐋𝐀:
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│🥷🏻 ➤  
│🥷🏻 ➤
╰─────────────╯`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

}
handler.help = ['scrim <hora>']
handler.tags = ['ffvs']
handler.command = /^(scrim|scrim1)$/i
handler.admin = true
handler.group = true

export default handler