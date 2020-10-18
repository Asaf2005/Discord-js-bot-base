const {client} = require("../index");

client.on("ready",function() {
    client.user.setActivity("ON TESTS")
    console.log(`${client.user.username} Is Ready`)
})