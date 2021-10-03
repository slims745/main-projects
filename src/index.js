if (Number(process.version.slice(1).split(".")[0]) < 10)
  throw new Error(
    "Node 10.0.0 or higher is required. Update Node on your system."
  );

const path = require("path");

const { Client } = require("discord.js");
const { Handler } = require("./handler");

const client = new Client({ disableEveryone: true });
const handler = new Handler(client, "/");
//xxx0xx - if prefix change 
//if prefix changes change it here too
const PREFIX = "/";

handler.load(path.join(__dirname, "./modules"), {
  client,
  commandHandler: handler
});

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help - twitch: ao1 slim745`);
});
client.login(process.env.TOKEN);
