const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let mhelp = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Alone Music | Komutlar',`
**.çal <şarkı ismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**.duraklat** : Çalan Şarkıyı Durdurur
**.devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**.tekrar** : Çalan Şarkıyı Tekrarlar
**.geç** : Bi Sonraki Şarkıya Geçiş Yapar
**.durdur** : Şarkıyı Durdurur 
**.çek** : Botu Sese Çeker 
**.ses** : Ses Seviyesini Belirler`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://media.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif")
.setImage("https://i.imgur.com/CnjCtgv.gif")

 message.channel.send(mhelp) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["mhelp"], 
  permLevel: 0
};
exports.help = {
  name: 'mhelp'
};