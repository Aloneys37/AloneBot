const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let help = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Alone Bot | Komutları',`
**.bd** : Istatistikler Gösterir
**.mhelp** : Müzik Yardım
**.ban** : Kişiyi Banlar @kullanıcı / sebep`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://i.imgur.com/MQ3E7xH.jpg")
.setImage("https://i.imgur.com/LBRaj9T.jpg")

 message.channel.send(help) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'help'
};
  