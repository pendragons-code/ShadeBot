const { ShadeBot } = require("./ShadeBot.js")
const { readdirSync } = require("fs")
function loadHelper() {
	console.log(`Loading helpers!`)
	readdirSync("./src/additionalItems").forEach(dirs => {
		const helper = readdirSync(`./src/additionalItems/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of helper) {
			require(`../additionalItems/${dirs}/${file}`)(ShadeBot)
			console.log(`Loading Helper: ${file} from ${dirs} succeeded!`)
		}
	})
}
module.exports = { loadHelper }
