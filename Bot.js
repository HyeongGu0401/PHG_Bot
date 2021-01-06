const Discord = require('discord.js') 
const client = new Discord.Client()
const { prefix, token } = require("./config.json");

client.on('ready', async() => { 
  console.log(`로그인 중 ${client.user.tag}!`) 
  client.user.setActivity('PHG Bot')
})

client.on('message', (message) => { 
  if(message.author.bot) return;
  
  if(message.content === `${prefix}핑`) {
    const timeTake = Date.now() - message.createdTimeestamp;
    message.reply(`서버와의 핑은 **${timeTake}ms**입니다 !`);
  }

else if (message.content == '형구야 임베드 출력') {
  const embed = new Discord.MessageEmbed()
    .setTitle('임베드 테스트')
    .setDescription('임베드를 출력했습니다')
    .setColor('#00ffff')
    .setFooter(`${message.author.username}님께 요청받음`)
  message.channel.send(embed)
}
}) 

client.login(token) 