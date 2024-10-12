/* By Sisked */

const handler = async (m, {conn, text}) => {
  m.reply(`*➢ "${pickRandom(global.sisked)}"*\n\n*_Super Bot de WhatsApp_*`);
};
handler.help = ['clk']
handler.tags = ['group'];
handler.command = ['clk'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.sisked = ['┍𝑹𝒆𝒈𝒍𝒂𝒔 𝑪𝑳𝑲🗒️
┕𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫 𝑨𝑪𝑻𝑰𝑽𝑨: 𝑨𝑳𝑶𝑲
⊢𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫𝑬𝑺 𝑷𝑨𝑺𝑰𝑽𝑨𝑺: 𝑴𝒐𝒄𝒐, 𝑲𝒆𝒍𝒍𝒚 𝒚 𝑴𝒂𝒙𝒊𝒎
⊢𝑷𝒓𝒊𝒎𝒆𝒓𝒂 𝑹𝒐𝒏𝒅𝒂 𝑫𝒆𝒔𝒆𝒓𝒕, 𝒅𝒆𝒔𝒑𝒖𝒆𝒔 𝒏𝒐 𝒗𝒂𝒍𝒆.
┍𝑨𝒓𝒎𝒂𝒔: 𝑺𝑶𝑳𝑶 𝑼𝑴𝑷
┕1 𝑴10 𝑷𝑶𝑹 𝑬𝑸𝑼𝑰𝑷𝑶
🛑 𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 🛑'];