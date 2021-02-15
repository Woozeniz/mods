const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(![(client.config.transport)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\  
  
  
let knave;
let knave1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let knave2 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!knave1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('0x800d0d').setDescription(`Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin`))
if (knave1) {
    knave = knave;
}
if (knave2) {
    knave = knave2;
}
if (!knave) {
    knave = message.member;
}

let ses = knave.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+knave.id+"> Bir Sesli Kanalda Değil!**")).then(x => x.delete({timeout: 5000}));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('#7289D').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"<@"+knave.id+"> Kişisi `"+ses.name+"` İsimli ses kanalında!"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["n"],
    permLevel: 0,
    name: "ses"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  
