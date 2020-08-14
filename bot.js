const axios = require("axios");
const discord = require("discord.js");
let GROUP_ID = 7211246;
let GOAL = 1000;
let count = 1;
let wid = "743708133561466951";
let wtoken = "7cVupV00KLzdxSgUgwhQuyQ5kPP1-zwFswdJb-VPJYGJQO5-6m0H4YNiPVMWbdJIVt1c";

let webhook = new discord.WebhookClient(wid, wtoken);
async function updateCount() {
  let response = await axios.get(
    `https://groups.roblox.com/v1/groups/${GROUP_ID}/`
  );
  let response_count = response.data.memberCount;
  console.log("got request");
  if (count < response_count) {
    console.log(response_count, count);
    const embed = new discord.RichEmbed()
      .setTitle("New Group Member!")
      .setColor("#75ddeb")
      .setDescription(
        `**__${
          response.data.name
        }__** | We are at ${response_count} members. Only ${GOAL -
          response_count} members to go until we get ${GOAL} members!`
      )
      .setFooter("✔️ Made by: DxubleG - Copyright 2020.");
    webhook.send(embed);
    if (count == 0) {
      count = response_count;
      return;
    }
    count = response_count;
  }
}

setInterval(() => {
  updateCount();
}, 10000);
//Created by: Rocket Ranking Services Mainly: DxubleG
/// ......