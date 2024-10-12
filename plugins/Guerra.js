var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/Wnt9yCm/file.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    // Verificar si se ingresaron suficientes argumentos (hora) (return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` ⚜️\n\n*INGRESA UNA HORA*\n_Ejemplo: .guerra 10PM_');

    const hora = args[0]; // Primer texto (hora)

    m.react('🎮');

    let yo = `│🕓 𝗛𝗢𝗥𝗔: *${hora}*`;
    



    m.react('🎮');

    let texto = `
 ╭──────⚔──────╮
  𝐆𝐔𝐄𝐑𝐑𝐀 𝐃𝐄 𝐂𝐋𝐀𝐍𝐄𝐒
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎: {hora} 
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 4*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 5*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 6*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 7*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 8*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 9*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 10*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 11*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│     *𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 12*
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
╰─────────────╯
`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

}
handler.help = ['guerra <hora>']
handler.tags = ['ffvs']
handler.command = /^(guerra1|guerra)$/i
handler.admin = true
handler.group = true

export default handler