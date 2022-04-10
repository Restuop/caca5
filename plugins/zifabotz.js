let handler = async (m, { conn }) => {
let caption = `*APA BANG MANGGIL²*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Menu`, `.?`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
