exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☠️♦️♦️◼️[${BotName}]◼️♦️♦️☠️
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
*BERIKUT ADALAH BEBERAPA FITUR YANG DAPAT DI GUNAKAN DI [${BotName}]*


⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*


♻ Command / Perintah :
   
=> *1.PEMBUAT STICKER*
_${BotName} BOT AKAN MENGIRIMKAN STICKER DENGAN PERINTAH *#sticker*


=> *2.NULIS OTOMATIS*
_${BotName} BOT AKAN MENGIRIMKAN TULISAN DENGAN PERINTAH *#nuliis*


=> *3.FITUR PANTUN*
_${BotName} BOT AKAN MENGIRIMKAN PANTUN DENGAN PERINTAH *#pantun*


=> *4.DOWNLOADER YOUTUBE*
_${BotName} BOT AKAN MENGIRIMKAN VIDEO YOUTUBE DENGAN PERINTAH *#yt [link]*


=> *5.FITUR QUOTES*
_${BotName} BOT AKAN MENGIRIMKAN QUOTES DENGAN PERINTAH *#quotes*


=> *6.PENYEGAR TIMELINE*
_${BotName} BOT AKAN MENGIRIMKAN FOTO CEWEK/COWOK DENGAN PERINTAH *#ptl [cewek/cowok]*


=> *7.FITUR ANIME*
_${BotName} BOT AKAN MENGIRIMKAN ANIME DENGAN PERINTAH *#randomanime*


=> *8.PENGUBAH SUARA GOOGLE*
_${BotName} BOT AKAN MENGIRIMKAN SUARA GOOGLE DENGAN PERINTAH *#ttsid [kata]*


=> *9.FITUR QURAN*
_${BotName} BOT AKAN MENGIRIMKAN STICKER DENGAN PERINTAH *#quran*


=> *10.INFORMASI BOT*
_${BotName} BOT AKAN MENGIRIMKAN STICKER DENGAN PERINTAH *#info*


=> *11.FITUR SAY*
_${BotName} BOT AKAN MENGIRIMKAN KATA KATA SESUAI YANG DI KIRIM DENGAN PERINTAH *#say [kata]*


=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} BOT AKAN MENGIRIMKAN MUSIK DENGAN PERINTAH *#ytmp3 [link]*


=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} BOT AKAN MENGIRIMKAN VIDEO/FOTO INSTAGRAM DENGAN PERINTAH *#ig [link]*


=> *14.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} BOT AKAN MENGIRIMKAN VIDEO/FOTO DENGAN PERINTAH *#fb [link]*


=> *15.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} BOT AKAN MENGIRIMKAN VIDEO/FOTO DENGAN PERINTAH *#twt [link]*


=> *16.WIKIPEDIA*
_${BotName} BOT AKAN MENGIRIMKAN HASIL WIKIPEDIA DENGAN PERINTAH *#wiki [kata]*


=> *17.TULISAN ALAY*
_${BotName} BOT AKAN MENGIRIMKAN TULISAN ALAY DENGAN PERINTAH *#alay [kata]*


=> *16.LIRIK MUSIK*
_${BotName} BOT AKAN MENGIRIMKAN LIRIK MUSIK DENGAN PERINTAH *#lirik [kata]*


☠️♦️♦️◼️INFORMASI COVID-19 TERBARU◼️♦️♦️☠️

☠️ POSITIF: *${corohelp.confirmed.value}*
☠️ SEMBUH: *${corohelp.recovered.value}*
☠️ MENINGGAL: *${corohelp.deaths.value}*
☠️ UPDATE: *${corohelp.lastUpdate}*


☠️♦️♦️◼️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_◼️♦️♦️☠️
 
☠️♦️♦️◼️[ *POWERED BY ${BotName}* ]◼️♦️♦️☠️`
}
