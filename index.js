const env = require("dotenv").config()
const { loadHelper } = require("./src/loaders/loadHelpers.js")
const { loadEvents } = require("./src/loaders/events.js")
const { loadMessageCommands } = require("./src/loaders/messageCommands.js")
const { loadSlashCommands } = require("./src/loaders/slashCommands.js")
const { ShadeBot } = require("./src/loaders/ShadeBot")
loadEvents()
loadHelper()
loadSlashCommands()
loadMessageCommands()
ShadeBot.login(process.env.token)
console.log(`Hanging out at process: ${process.pid}`)
process.traceDeprecation = true
