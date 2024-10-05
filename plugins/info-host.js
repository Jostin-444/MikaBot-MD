//código editado x Mxz <3
//▝▞▟▘▙▚▛▜▝▞▟▖▗▘▙▚▛▜▝
let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `👋 *¡Bienvenido a TK-Host  🚀💻*
La plataforma más rápida y confiable para alojar tus servidores y potenciar tus proyectos. 🌐

🔑 *Comienza ahora mismo:*
- *Regístrate*: [https://dash.tk-joanhost.com]  
- *Verifica tu cuenta*: revisa spam de Gmail oh que te verifique JoanTK
- *Crea tu servidor*: [https://dash.tk-joanhost.com/servers]  
- *Accede a tu servidor*: [https://panel.tk-joanhost.com]

💳 *¿Quieres recargar coins?*

💡 *Compra tus coins* con *PayPal* de forma rápida y segura:  
👉 [https://dash.tk-joanhost.com/store]

*¿No tienes PayPal?*  
¡No te preocupes! 🌍 También aceptamos *pagos internacionales**. Solo envía el monto solicitado en la tienda y el comprobante de pago. Activaremos tus *coins* rápidamente. 

📱 *Para usuarios en Perú*:  
- *Yape/Agora*: 927803866  
- *Plin*: 976673519  

🌍 *Para clientes internacionales*:  
- *Mercado Pago*: *02JOAN*  
- *Astropay*: *02JOAN*


✨ *Gracias por elegir TK-Host.* Estamos comprometidos a brindarte la mejor experiencia en alojamiento de servidores. 🚀 ¡Tu éxito es nuestra prioridad!

---

    💥ᮬ᭄ᮬ᭄ Canal Oficial de TK-HOST:
[https://whatsapp.com/channel/0029VaGGynJLY6d43krQYR2g]

      📲 Canal de Respaldo:
[https://whatsapp.com/channel/0029VaoZXbk6RGJNYQVP8r27]

---` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔥 亇Ӄ-ん૭ટｲ 🔥`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/hXTXJ.jpg', 
sourceUrl: 'https://dash.tk-joanhost.com'}}},
{ quoted: fakegif3})
}
handler.tags =['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'tkpanel', 'joanhost', 'hosting']
export default handler