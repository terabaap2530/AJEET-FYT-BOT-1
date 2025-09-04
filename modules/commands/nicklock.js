const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "nicklock.json");

// 🔹 Load nick data
function loadData() {
  try {
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  } catch {
    return {};
  }
}

// 🔹 Save nick data
function saveData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports.config = {
  name: "nicklock",
  version: "3.0.0",
  hasPermssion: 2,
  credits: "Lord Axshu",
  description: "Lock/Unlock nicknames in group or for specific users",
  commandCategory: "group",
  usages: "nicklock on [name] / off / @tag [name] / status",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const data = loadData();
  const threadID = event.threadID;

  if (!args[0]) {
    return api.sendMessage(
      "❌ Usage:\n• nicklock on [name]\n• nicklock off\n• nicklock @tag [name]\n• nicklock status",
      threadID,
      event.messageID
    );
  }

  const option = args[0].toLowerCase();

  // 🔹 Status Check
  if (option === "status") {
    if (data[threadID] && data[threadID].active) {
      let lockedUsers = Object.keys(data[threadID].lockedNames).length;
      return api.sendMessage(
        `📌 NickLock Status: ON\n🔒 Locked Users: ${lockedUsers}`,
        threadID,
        event.messageID
      );
    } else {
      return api.sendMessage("📌 NickLock Status: OFF", threadID, event.messageID);
    }
  }

  // 🔹 Enable Lock (Full Group)
  if (option === "on") {
    const name = args.slice(1).join(" ");
    if (!name) return api.sendMessage("❌ Nickname dena zaruri hai!", threadID, event.messageID);

    const threadInfo = await api.getThreadInfo(threadID);
    const members = threadInfo.participantIDs;

    if (!data[threadID]) data[threadID] = { active: false, lockedNames: {} };

    for (let id of members) {
      if (id === api.getCurrentUserID()) continue; // bot ko skip
      await api.changeNickname(name, threadID, id);
      data[threadID].lockedNames[id] = name;
    }

    data[threadID].active = true;
    saveData(data);

    return api.sendMessage(
      `✅ Group-wide nickname lock enabled.\n🔒 Sabke names "${name}" set karke lock kar diye gaye!`,
      threadID,
      event.messageID
    );
  }

  // 🔹 Disable Lock
  if (option === "off") {
    if (data[threadID]) {
      delete data[threadID];
      saveData(data);
      return api.sendMessage("🔓 Nickname lock disabled for this group.", threadID, event.messageID);
    } else {
      return api.sendMessage("ℹ️ Is group me lock active hi nahi tha.", threadID, event.messageID);
    }
  }

  // 🔹 Lock for Specific User(s) (with tag)
  if (event.mentions && Object.keys(event.mentions).length > 0) {
    const name = args.slice(Object.keys(event.mentions).length).join(" ");
    if (!name) return api.sendMessage("❌ Nickname dena zaruri hai!", threadID, event.messageID);

    if (!data[threadID]) data[threadID] = { active: true, lockedNames: {} };

    for (let uid in event.mentions) {
      await api.changeNickname(name, threadID, uid);
      data[threadID].lockedNames[uid] = name;
    }

    saveData(data);
    return api.sendMessage(
      `✅ Selected user(s) ka nickname "${name}" set karke lock kar diya gaya.`,
      threadID,
      event.messageID
    );
  }

  return api.sendMessage("❌ Invalid format! Try: nicklock on [name] / off / status / @tag [name]", threadID, event.messageID);
};

// 🛡️ Auto Restore Nicknames if Changed
module.exports.handleEvent = async function({ api, event }) {
  if (event.logMessageType !== "log:user-nickname") return;

  const data = loadData();
  const threadID = event.threadID;
  const locked = data[threadID];

  if (!locked || !locked.active) return;

  const uid = event.logMessageData.participant_id;
  if (locked.lockedNames[uid]) {
    // restore
    api.changeNickname(locked.lockedNames[uid], threadID, uid);
  }
};
