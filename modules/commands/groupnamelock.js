const fs = require("fs");
const path = __dirname + "/groupnamelock.json";

module.exports.config = {
  name: "groupnamelock",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "Lord Axshu",
  description: "Silently lock/unlock group name with custom name",
  commandCategory: "GROUP",
  usages: "groupnamelock on <name> / off",
  cooldowns: 0
};

module.exports.onLoad = () => {   
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const { threadID, isGroup } = event;
  if (!isGroup) return;

  let data = JSON.parse(fs.readFileSync(path));
  let info = (await Threads.getData(threadID)).threadInfo || {};
  const currentName = info.threadName;

  if (!data[threadID]) return;

  // 🔒 silently revert
  if (data[threadID].status === true && currentName !== data[threadID].lockedName) {
    return api.setTitle(data[threadID].lockedName, threadID);
  }
};

module.exports.run = async function ({ api, event, Threads, args }) {
  const { threadID } = event;
  let data = JSON.parse(fs.readFileSync(path));

  // ====== ON CASE ======
  if (args[0] && args[0].toLowerCase() === "on") {
    const newName = args.slice(1).join(" ");
    if (!newName) {
      return api.sendMessage("❌ Usage: groupnamelock on <name>", threadID);
    }

    // set group name
    await api.setTitle(newName, threadID);

    // save locked name
    data[threadID] = {
      lockedName: newName,
      status: true
    };
    fs.writeFileSync(path, JSON.stringify(data, null, 2));

    return api.sendMessage(`✅ Group name locked as "${newName}"`, threadID);
  }

  // ====== OFF CASE ======
  if (args[0] && args[0].toLowerCase() === "off") {
    if (!data[threadID] || data[threadID].status === false) {
      return api.sendMessage("ℹ️ Lock already disabled.", threadID);
    }

    data[threadID].status = false;
    fs.writeFileSync(path, JSON.stringify(data, null, 2));

    return api.sendMessage("🔓 Group name lock disabled!", threadID);
  }

  return api.sendMessage("❌ Usage: groupnamelock on <name> / off", threadID);
};
