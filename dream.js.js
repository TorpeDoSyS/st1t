﻿const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`نايم نايم نايم zzzzzz`,"http://twitch.tv/Dream")
client.user.setStatus("#IT WORKS!!")
});



client.login("NDE5NTk3NjMwOTE0NjkxMDgy.DxOevg.FnMMkY8PCxJxMw9Lye8shsSijOQ");// لا تغير فيها شيء
