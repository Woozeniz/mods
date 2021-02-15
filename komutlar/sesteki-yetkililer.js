const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\

if(![(client.config.transport)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
  let knave2 = "**Seste Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get((client.config.yetkilirol1)).members.map && message.guild.roles.cache.get((client.config.yetkilirol2)).members.map(r => {
    knave2 += !r.voice.channel ? "<@" + r.user.id + ">\n" : "";
  });

 
  message.channel.send("" + knave2 + "").then(s => s.s);
};
module.exports.conf = {
  aliases: ["yetkilisay"]
};

module.exports.help = {
  name: "sesteki-yetkililer"
};