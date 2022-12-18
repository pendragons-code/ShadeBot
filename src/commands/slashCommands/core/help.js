const { EmbedBuilder } = require('discord.js');
module.exports = {
	name: "help",
	aliases: [],
	category: "core",
	description: "A basic help command!",
	utilisation: "help",
	async execute({ ShadeBot, inter }) {
		inter.channel.send("Hello World!")
		console.log("Hello World!")
	},
};
