const {client} = require("../index");

client.on("ready",function() {
    client.user.setActivity("made by @AsafSivan1 https://github.com/AsafSivan1/Discord-js-bot-base/edit/main/handlers/ready.js")
    console.log(`${client.user.username} Is Ready`)
})
