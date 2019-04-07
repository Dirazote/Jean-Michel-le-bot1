const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.on("ready", () => 
{
    client.user.setGame("gérer le côté administratif");
});

client.on('message', message => 
{
    const role2 = message.guild.roles.find('name', 'EC');
    const role1 = message.guild.roles.find('name', 'IR');
             
    if(message.content === "Oui") 
    {        
        message.channel.sendMessage("Non, je t'assure que non");
    }
    if(message.content === "Non") 
    {        
        message.channel.sendMessage("bril...")        
    }
    
    
    if(message.content === "Jean Michel que penses tu de Nicolas?") 
    {        
        message.channel.sendMessage("Une catastrophe naturelle... Voir même un cataclysme");
    }
    if(message.content === "C'est pas méchant de dire ça?") 
    {        
        message.channel.sendMessage("Je suis codé afin de dire uniquement la vérité :)")        
    }
    if(message.content === "Jean Michel que penses tu de Vinny?") 
    {        
        message.channel.sendMessage("Une merveille, un être supérieur, un génie et j'en passe :)");
    }
    
    if(message.content === prefix + "IR") 
    {        
        message.member.removeRole(role2)        
        message.member.addRole(role1)
        message.channel.sendMessage("C'est bon votre réponse a bien été prise en compte ^^");
    }
    if(message.content === prefix + "EC") 
    { 
        message.member.removeRole(role1)                   
        message.member.addRole(role2)
        message.channel.sendMessage("C'est bon votre réponse a bien été prise en compte ^^");
    }
    if(message.content === "Quoi?") 
    {        
        message.channel.sendMessage("feur")        
    }
    if(message.content === "!help") 
    {
        var help = new Discord.RichEmbed()
        .setColor("#F40000")                      
        .setAuthor("Les ornithorynques vont dominer le monde")
        message.channel.sendMessage(help);      
    }
});

client.on('message', message => 
{
if(message.content.startsWith(prefix + "clear")) 
{
    let args = message.content.split(" ").slice(1);

    if(!args[0]) return message.channel.send("Précise le nombre de messages à supprimer")
    message.channel.bulkDelete(args[0]).then(() =>
    {
        message.channel.send(`${args[0]} messages ont été supprimé`);
    }
)}})

client.login(process.env.TOKEN);
