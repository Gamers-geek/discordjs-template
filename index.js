const { Client, Collection, IntentsBitField } = require("discord.js");
const { token } = require("./config");
const { readdirSync } = require("fs");
const path = require("path");

const client = new Client({
	intents: [IntentsBitField.Flags.MessageContent /* other discord intents */],
});

client.commands = new Collection();
const commands = [];

module.exports.commands = commands;
module.exports.client = client;

const commandFiles = readdirSync(path.join(__dirname, "commands")).filter(
	(file) => file.endsWith(".js")
);
for (const file of commandFiles) {
	const command = require(path.join(__dirname, "commands", file));
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

const eventFiles = readdirSync(path.join(__dirname, "events")).filter((file) =>
	file.endsWith(".js")
);
eventFiles.map((value) => require(path.join(__dirname, "events", value)));

client.login(token);
