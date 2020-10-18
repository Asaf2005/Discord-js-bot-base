module.exports.run = async (client,message,args) => {
	message.channel.send(`Ping: ${message.client.ws.ping}`)
}

exports.help = {
	name: "ping"
}

exports.conf = {
	aliases:["ms"]
}
