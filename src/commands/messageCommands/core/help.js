module.exports = {
	name: "help",
	aliases: [],
	category: "core",
	desc: "A basic help command!",
	utilisation: "help",
	async execute(ShadeBot, messageCreate, args, mainPrefix){
		messageCreate.channel.send("Hello World!")
		console.log("Hello World!")
	}
}
