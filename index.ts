const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
let token: string = "";
client.on('ready', () => {
    console.log("It's a me, Andrew! Call me by typing Italiano");
    // client.channels.get("name", "reddit-free-zone");
});
client.on('message', message => {
    if (message.content.startsWith("Italiano")) {
        // TODO : Make this not fucking trash
        let number = Math.random();
        if (number < .3)
            message.reply("Mamma mia!");
        else if (number < .5)
            message.reply("Wowee, I love Anime and Pizza!");
        else if (number < .7)
            message.reply("Yahoo! Italy!");
        else
            message.reply("https://barbaracartategui.files.wordpress.com/2010/11/pizza-pepperoni.jpg");
    }
});
// Check for token.txt
if (token == "") {
    fs.readFile("token.txt", "utf-8", (err, data) => {
        token = data;
        client.login(token);

    });
}
else
    client.login(token);