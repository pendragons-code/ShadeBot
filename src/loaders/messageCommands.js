const { ShadeBot } = require("./ShadeBot.js")
const { readdirSync } = require("fs")

function loadMessageCommands() {
	console.log(`Loading messageCommands`)
	readdirSync("./src/commands/messageCommands").forEach(dirs => {
		const commandFile = readdirSync(`./src/commands/messageCommands/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of commandFile) {
			const command = require(`../commands/messageCommands/${dirs}/${file}`)
			console.log(`Loading messageCommand: ${file} from ${dirs}!`)
			ShadeBot.messageCommands.set(command.name.toLowerCase(), command)
		}
	})
}
module.exports = { loadMessageCommands }
