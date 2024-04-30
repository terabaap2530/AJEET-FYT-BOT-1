module.exports.config = {
    name: "convo",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "PREM BABU",
    description: "THIS BOT WAS MADE BY MR PREM BABU",
    commandCategory: "NONE STOP SEND MESSAGE CONVO",
    usages: "CONVO",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, event}) {
    var mention = Object.keys(event.mentions)[0];
    let name = event.mentions[mention];
    var arraytag = [];
    arraytag.push({id: mention});

    // Har 2 second mein message bhejne ka function
    const sendMessageWithDelay = (message, delay) => {
        setTimeout(() => {
            api.sendMessage(message, event.threadID);
        }, delay);
    };

    // Messages ka sequence execute karne ka function
    const executeSequence = () => {
        sendMessageWithDelay("TERIII NANII KI CHUT GULABI FATA BOSDA GANDU KE OKAATLESS", 0);
        sendMessageWithDelay({body: "TERII MOSI KII CHUT MAII MUTU RANDI KE PILE "}, 2000);
        sendMessageWithDelay({body: "TERIII MAA KA KALA CHUT MAI KALAA LUND DALUU BOSDKE GANDU "}, 4000);
        sendMessageWithDelay({body: "TERIII BEHN KE BOOBS BIG WALE DABA DABA KE OR BIG BIG KR DUGA BEHNCHOD "}, 6000);
        sendMessageWithDelay({body: "TERIII BEHN ROJ MERA LUND MUH MAI DAAL KE CHUSTI HAI LOWDE "}, 8000);
        sendMessageWithDelay({body: "TERIII BEHN MAR RAHIII HAII MERA LUND CHUT MAI DALNE KE LIYE "}, 10000);
        sendMessageWithDelay({body: "TERI MAA BEHN KO EK SATH RANDII BNA KE CHODUGA LOWDE"}, 12000);
        sendMessageWithDelay({body: "OKAAAT LESS RANDIII KA BACHAA 6KAAA HIJDEE KI OLAAD MERE KUND KI BAAL"}, 14000);
        sendMessageWithDelay({body: "TERIII BEHN KE BURH MAI LOWDA DAAL KE TERI MAA KA BOOBS DABA RAHA HU BOSDKE "}, 16000);
        sendMessageWithDelay({body: "TERIII MAA KA BOSDAAA SAALE MADARCHOD OKAAT BANA "}, 18000);
        sendMessageWithDelay({body: "TERII MAA KI KALI CHUT MAI KUTE KA LUND DALU "}, 20000);
        sendMessageWithDelay({body: "TERII BEHN KI CHUT MAARU TAAG UTHA UTHA KE "}, 22000);
        sendMessageWithDelay({body: "TERII BEHN KI GAAAD MAARU RANDIII KE PILE "}, 24000);
        sendMessageWithDelay({body: "TERIII MAAA KA FATA BOSDA SAALE GWAAR TERI MAA MA KI KALI CHUT "}, 26000);
        sendMessageWithDelay({body: "TERIII RANDI MAA KA BOOBS KA MILK NIKAAL KE GREEBO MAI BAATU "}, 28000);
        sendMessageWithDelay({body: "TERIII MAA KA BOOBS SWEET SWEET HAI RANDI KE OLAAD "}, 30000);
        sendMessageWithDelay({body: "LOWDE OKAATLESS HAI TU GWAAR FATT GYI KE "}, 46000);
        sendMessageWithDelay({body: "TERII MAMI KI CHUT MAI MERE DOG TOMI KA LUND "}, 48000);
        sendMessageWithDelay({body: "XXX PORN VIDEO BANAUGA TERIII MAA OR BEHN KI EK SATH LOGO MERA HOGA "}, 50000);
        sendMessageWithDelay({body: "TERII ALL COISNE SISTER KO NAGII KR KE CHODUGA LIVE VIDEO CHALEGI "}, 52000);
        sendMessageWithDelay({body: "BRAKING NEWS BANAUGA TERII MAA KA BOSDAA FATA HUA SAALE "}, 54000);
        sendMessageWithDelay({body: "TERIII MAA TADAP RAHI HAI MERA LOWDA LENE KE LIYE BHEJ APNI MAA KO ", 56000);
        sendMessageWithDelay({body: "TERIII MAAA KI SASTI CHUT MAARU "}, 58000);
        sendMessageWithDelay({body: "TERII BEHN KI 200 RUPE WALI CHUT MARKET MAI SALE KRU "}, 60000);
        sendMessageWithDelay({body: "MADARXHOD AGAR BHAGA TOH TERI BEHN MERI RAKHAIL HOGI TERII BEHN KI KALI CHUT MERE LUND KA HOGA "}, 62000);
        sendMessageWithDelay({body: "BOSDIKEE TYPEE KOO CP BOL RAHA GANDU FAT HYI KE TERIII MAAA KAAA BURH CHODU "}, 70000);
    };

    // Command run hone par sequence ko execute karein
    executeSequence();

    // Sequence ko har 70 second mein execute karne ke liye interval set karein
    interval = setInterval(() => {
        executeSequence();
    }, 70000);

    // Jung ko rukne ka function
    const stopWar = () => {
        clearInterval(interval); // Interval ko clear karein
        api.sendMessage("Jung band ho gayi.", event.threadID); // Jung ruk gayi hai iska notification karein
    };

    // Jung ko rukne ka function return karein
    return stopWar;
}
