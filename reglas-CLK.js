import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `🗒️𝙍𝙚𝙜𝙡𝙖𝙨 𝘾𝙡𝙠🗒️
*𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫 𝑨𝑪𝑻𝑰𝑽𝑨: 𝑨𝑳𝑶𝑲*

*𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫𝑬𝑺 𝑷𝑨𝑺𝑰𝑽𝑨𝑺:* 𝑴𝒐𝒄𝒐, 𝑲𝒆𝒍𝒍𝒚 𝒚 𝑴𝒂𝒙𝒊𝒎

𝑷𝒓𝒊𝒎𝒆𝒓𝒂 𝑹𝒐𝒏𝒅𝒂 𝑫𝒆𝒔𝒆𝒓𝒕, 𝒅𝒆𝒔𝒑𝒖𝒆𝒔 𝒏𝒐 𝒗𝒂𝒍𝒆.

*𝑨𝒓𝒎𝒂𝒔:* 𝑺𝑶𝑳𝑶 𝑼𝑴𝑷
1 𝑴10 𝑷𝑶𝑹 𝑬𝑸𝑼𝑰𝑷𝑶

*𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐:* 

*𝑨𝒍𝒕𝒖𝒓𝒂𝒔:* 𝑺𝒐𝒍𝒐 𝒄𝒂𝒋𝒂𝒔, 𝒂𝒖𝒕𝒐𝒔 𝒚 𝒄𝒐𝒏𝒕𝒂𝒊𝒏𝒆𝒓𝒔 (𝑴𝒐𝒏𝒕𝒂𝒏̃𝒂 𝒅𝒆 𝒎𝒊𝒍𝒍 
𝒑𝒂𝒓𝒕𝒆 𝒂𝒍𝒕𝒂 𝒏𝒐 𝒗𝒂𝒍𝒆)

𝑵𝒊𝒏𝒈𝒖𝒏 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒈𝒓𝒂𝒏𝒂𝒅𝒂𝒔.


𝑷𝒓𝒊𝒎𝒆𝒓𝒂 𝒔𝒂𝒍𝒂: 𝒓𝒊𝒗𝒂𝒍
𝑺𝒆𝒈𝒖𝒏𝒅𝒂: 𝑪𝒍𝒂𝒏
𝑻𝒆𝒓𝒄𝒆𝒓𝒂: 𝒑𝒆𝒓𝒅𝒆𝒅𝒐𝒓 𝒅𝒆 𝒑𝒓𝒊𝒎𝒆𝒓𝒂

𝑪𝒓𝒆𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 𝒍𝒂 𝒔𝒂𝒍𝒂:
200𝑯𝒑
𝑨𝒅𝒊𝒕𝒂𝒎𝒆𝒏𝒕𝒐𝒔: 𝑵𝒐
𝑨𝒊𝒓𝒅𝒓𝒐𝒑: 𝑵𝒐
𝑨𝒊𝒓𝒅𝒓𝒐𝒑 𝒄𝒊𝒃𝒆𝒓𝒏𝒆𝒕𝒊𝒄𝒐: 𝑵𝒐
𝑨𝒕𝒓𝒊𝒃𝒖𝒕𝒐𝒔 𝒅𝒆𝒍 𝑨𝒓𝒎𝒂: 𝑵𝒐
𝑴𝒖𝒏𝒊𝒄𝒊𝒐𝒏𝒆𝒔 𝒍𝒊𝒎𝒊𝒕𝒂𝒅𝒂𝒔: 𝑺𝒊

𝑺𝑨𝑳𝑨   𝑨𝑽𝑨𝑵𝒁𝑨𝑫𝑨:
𝑫𝑬𝑺𝑬𝑹𝑻
𝑼𝑴𝑷
𝑴10
𝑷𝑨𝑹𝑬𝑫 𝑮𝑳𝑶𝑶
𝑪𝑨𝑱𝑨 𝑫𝑬 𝑹𝑬𝑷𝑨𝑹𝑨𝑪𝑰𝑶𝑵
𝑪𝑨𝑺𝑪𝑶 𝒀 𝑪𝑯𝑨𝑳𝑬𝑪𝑶 𝑵𝑽𝑳 2
𝑯𝑶𝑵𝑮𝑶 𝑵𝑽𝑳 3  
𝙍𝙚𝙜𝙡𝙖𝙨 𝘽𝙖́𝙨𝙞𝙘𝙖𝙨 
𝙋𝙄𝙉𝙂𝙐̈𝙄-𝘽𝙊𝙏` 
}
handler.command = /^(reglasclk|clk)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler