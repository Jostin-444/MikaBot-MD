import fetch from 'node-fetch'
import { uploadPomf } from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    try {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) throw m.reply('✧ Responde a una *Imagen*.')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadPomf(media)
        let response = await fetch(`https://api.ryzendesu.vip/api/ai/waifu2x?url=${url}`)
        if (!response.ok) throw new Error('Error API waifu2x')

        let hasil = await response.buffer()

        await conn.sendFile(m.chat, hasil, 'hasil.jpg', global.wm, m)
    } catch (error) {
        console.error(error)
        m.reply('Internal server error')
    }
}

handler.help = ['hd2']
handler.tags = ['ai']
handler.command = /^(hd2)$/i

handler.register = true
handler.limit = 3

export default handler