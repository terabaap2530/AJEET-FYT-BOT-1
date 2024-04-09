const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "PREM-BOT",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "FYTER REPLY MR PREM BABU",
  commandCategory: "Noprefix",
  usages: "FYT",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["TERIII NANII KI CHUT GULABI FATA BOSDA GANDU KE OKAATLESS"," TERII MOSI KII CHUT MAII MUTU RANDI KE PILE  "," TERIII MAA KA KALA CHUT MAI KALAA LUND DALUU BOSDKE GANDU  "," OKAAAT BNAA SAALE MADARCHOD TERI BEHMN KI NAGI KAR KE CHODU  "," TERIII BEHN KE BOOBS BIG WALE DABA DABA KE OR BIG BIG KR DUGA BEHNCHOD  "," TERIII BEHN ROJ MERA LUND MUH MAI DAAL KE CHUSTI HAI LOWDE  "," TERIII BEHN MAR RAHIII HAII MERA LUND CHUT MAI DALNE KE LIYE  "," TERI MAA BEHN KO EK SATH RANDII BNA KE CHODUGA LOWDE "," OKAAAT LESS RANDIII KA BACHAA 6KAAA HIJDEE KI OLAAD MERE KUND KI BAAL "," TERIII BEHN KE BURH MAI LOWDA DAAL KE TERI MAA KA BOOBS DABA RAHA HU BOSDKE  "," TERIII MAA KA BOSDAAA SAALE MADARCHOD OKAAT BANA  "," TERII MAA KI KALI CHUT MAI KUTE KA LUND DALU  "," TERIII DIDI KI NASILI CHUTT GARAM GARAM  "," TERII BEHN KI CHUT MAARU TAAG UTHA UTHA KE  "," TERII BEHN KI GAAAD MAARU RANDIII KE PILE  "," TERIII MAAA KA FATA BOSDA SAALE GWAAR TERI MAA MA KI KALI CHUT  "," TERIII RANDI MAA KA BOOBS KA MILK NIKAAL KE GREEBO MAI BAATU  "," TERIII MAA KA BOOBS SWEET SWEET HAI RANDI KE OLAAD  "," LOWDE OKAATLESS HAI TU GWAAR FATT GYI KE  "," TERII MAMI KI CHUT MAI MERE DOG TOMI KA LUND  "," XXX PORN VIDEO BANAUGA TERIII MAA OR BEHN KI EK SATH LOGO MERA HOGA  "," BRAKING NEWS BANAUGA TERII MAA KA BOSDAA FATA HUA SAALE  "," TERII ALL COISNE SISTER KO NAGII KR KE CHODUGA LIVE VIDEI CHALEGI  "," TERIII MAA TADAP RAHI HAI MERA LOWDA LENE KE LIYE BHEJ APNI MAA KO  "," TERIII MAAA KI SASTI CHUT MAARU  "," TERII BEHN KI 200 RUPE WALI CHUT MARKET MAI SALE KRU  "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌺")) {
    return api.sendMessage("🤣🤣🤣🤣🤣🤣🤣", threadID);
  };

  /////////////////////@prem-babu3608////////////////////
  if (event.body.includes("Bot") == 0 || (event.body.includes("bot") == 0)) {
    const excludedIDs = ['100043895143106','100070531069371','61551624162579','61553803632597','61554799933362','61554893708782','100044785175629']; // Fake user IDs jo exclude karni hain
    if (!excludedIDs.includes(id)) {
      var msg = {
        body: `${rand}`
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
