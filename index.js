require("dotenv").config()
const { Client } = require("discord.js")
const client = new Client({ intents: ["GUILD_MESSAGES", "GUILDS"] })

client.on("messageCreate", message => {
    if(message.author.bot) return;
    if((!message.content.startsWith("<@695580369281482842>")) && (!message.content.startsWith("<@!695580369281482842>"))) return;
    
    message.content = message.content.replace("<@695580369281482842>", '')
    message.content = message.content.replace("<@!695580369281482842>", '')
    
    if(message.content === "prefix") message.reply("my prefix: <@!695580369281482842>")
    else if(message.content === "howgay") message.reply("You are 9999999.9999% gay! (pls dont take this serious)")
    else message.reply("Command not found")
})

client.login(process.env.TOKEN)
