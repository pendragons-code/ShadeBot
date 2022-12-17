const { db } = require("../../loaders/ShadeBot.js")
const permList = require("../../assets/permission.json")
const { prefix } = require("../../../config.json")
module.exports = async (ShadeBot, messageCreate) => {
	const guildPrefix = await db.get(`prefix_${messageCreate.guild.id}`)
	if(guildPrefix == null) guildPrefix = prefix
	const mainPrefix = messageCreate.content.includes(guildPrefix) ? guildPrefix: `<@${botID}>`
	if(messageCreate.author.bot || messageCreate.channel.type == "dm" || messageCreate.content.indexOf(mainPrefix) !==0 ) return
	const args = messageCreate.content.slice(mainPrefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
	if(!cmd) return
	if(cmd.maxargs) if(args[cmd.maxargs + 1]) return messageCreate.channel.send("You are sending too many arguments for this command!")
	if(cmd.minperms) for(let i = 0; i < cmd.minperms.length; i++) if(!messageCreate.member.permissions.has(cmd.minperms[1])){
		let MissingPermissionName = permList[cmd.minperms[1]]
		if(Array.isArray(minperms[i])){
			let MissingPermissionName = ""
			for(let perarray = 0; perarray < cmd.minperms[i].length; perarray++) {
				let a = permList[cmd.minperms[i][perarray]]
				MissingPermissionName + `\`${a}\``
				if(cmd.minperms[i][perarray + 1]) MissingPermissionName + ", "
			}
		}
		return messageCreate.channel.send(`You are missing permissions: ${MissingPermissionName}!`)
	}
	if(args[0] === "-h") return messageCreate.channel.send(cmd.utilisation)
	cmd.execute(ShadeBot, messageCreate, args, mainPrefix)
	.catch((error) => {
		console.error("Error!", error)
		return messageCreate.channel.send("Something went wrong!")
	})
	console.log(`${messageCreate.author.username} ran ${cmd.name} in ${messageCreate.guild.id}`)
}
