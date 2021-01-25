const Discord = require("discord.js");
const client = new Discord.Client()
const { prefix, token } = require("./config.json");



client.on('ready', () => {
    console.log(`봇이 켜졌습니다 ! ${client.user.tag}`);
    client.user.setPresence({
        activity: {
            name: '테스트'
        },
        status: 'dnd'
    })
});

client.login(token);