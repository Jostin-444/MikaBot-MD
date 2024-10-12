/* By Sisked */

const handler = async (m, {conn, text}) => {
  m.reply(`*➢ "${pickRandom(global.sisked)}"*\n\n*Veoooo*`);
};
handler.help = ['sisked']
handler.tags = ['group'];
handler.command = ['sisked'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.sisked = ['hola'];