const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////////////////
//========= Create simple website for uptime ==========//
/////////////////////////////////////////////////////////

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  logger(`Server running on port ${port}`, "[ SERVER ]");
});

/////////////////////////////////////////////////////////
//========= Function to start and restart bot =========//
/////////////////////////////////////////////////////////

function startBot(message) {
  if (message) logger(message, "[ Starting ]");

  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "PREM-BABU.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
  });

  child.on("close", (codeExit) => {
    if (codeExit !== 0) {
      global.countRestart = (global.countRestart || 0) + 1;
      if (global.countRestart <= 5) {
        logger(`Bot crashed with code ${codeExit}. Restarting...`, "[ RESTART ]");
        startBot();
      } else {
        logger("Bot crashed too many times. Stopping restarts.", "[ ERROR ]");
      }
    }
  });

  child.on("error", function (error) {
    logger("An error occurred: " + JSON.stringify(error), "[ ERROR ]");
  });
}

////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

axios
  .get("https://raw.githubusercontent.com/terabaap2530/AJEET-FYT-BOT-1/main/package.json")
  .then((res) => {
    logger(res.data.name, "[ NAME ]");
    logger("Version: " + res.data.version, "[ VERSION ]");
    logger(res.data.description, "[ DESCRIPTION ]");
  })
  .catch((err) => {
    logger("Unable to fetch update info: " + err.message, "[ ERROR ]");
  });

////////////////////////////////////////////////
//============= Start the bot ================//
////////////////////////////////////////////////

startBot();
