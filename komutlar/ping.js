const Discord = require('discord.js')
module.exports = {
    kod: "ping",
    async run (client, message, args) {
      const embed = new Discord.MessageEmbed()
      .setTitle('PİNG ÖLÇER')
      .addField('`Bot Pingi`:',  `${client.ws.ping}`  +  'ms')
      .addField('`Mesaj gecikmesi süresi`:', `${Date.now() - message.createdTimestamp}` + 'ms')
      .addField('NOT:', 'Bu Komut Sizin Pinginizi Göstermez Her Botun Ping Komutu Kendi Pingini Gösterir Sizinkini Göstermez!')
      .setColor('RANDOM')
      message.channel.send(embed)
    }
  }