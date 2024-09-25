import { default as makeWASocket } from '@whiskeysockets/baileys';

const handler = async (m, { conn }) => {
  try {
    const documents = [
      {
        title: "Grupo 1",
        url: "https://chat.whatsapp.com/DVt1mhZ6H7EIpt4lmjURwq",
        fileName: "Grupo 1 - WhatsApp"
      },
      {
        title: "Grupo 2",
        url: "https://chat.whatsapp.com/DVt1mhZ6H7EIpt4lmjURwq",
        fileName: "Grupo 2 - WhatsApp"
      },
      {
        title: "Grupo 3",
        url: "https://chat.whatsapp.com/H1bkAbh52qC7IDDJn2m9tv",
        fileName: "Grupo 3 - WhatsApp"
      },
      {
        title: "Canal Oficial",
        url: "https://whatsapp.com/channel/0029VapEN8R0lwgxucaEc843",
        fileName: "Canal Oficial - WhatsApp"
      }
    ];

    for (const doc of documents) {
      const buttonMessage = {
        document: {
          url: doc.url,
        },
        mimetype: 'application/pdf',
        fileName: doc.fileName,
        caption: `📄 ${doc.title} - Únete al grupo`,
        buttons: [
          { buttonId: `link_${doc.url}`, buttonText: { displayText: `Unirme a ${doc.title}` }, type: 1 }
        ],
        headerType: 1
      };

      await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
    }
  } catch (error) {
    console.error("Error enviando el mensaje:", error);
    conn.reply(m.chat, `❌️ *OCURRIÓ UN ERROR:* ${error.message}`, m);
  }
};

handler.command = ['test4'];

export default handler;