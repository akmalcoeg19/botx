exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☠️♦️♦️◼️[ *MENU ${BotName}* ]◼️♦️♦️☠️

  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
*Berikut adalah info pada bot ini!✨*


⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*


♻ INFO BOT! :

⚜ *ISP*: DIGITALOCEAN,INC
⚜ *CITY*: SINGAPORE
⚜ *RAM*: 1 GB
⚜ *CORE*: 1 CORE
⚜ *OWNER*: ZANX

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK *#donate*


✅ Follow akun instagram ${instagramlu}


⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*


♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

  
☠️♦️♦️◼️[ *POWERED BY ${BotName}* ]◼️♦️♦️☠️`
}
