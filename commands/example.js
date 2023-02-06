const {
	Client,
	CommandInteraction,
	SlashCommandBuilder,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName(`example`)
		.setDescription(`This is an example`)
		.addStringOption((option) => {
			option
				.setName(`example-option`)
				.setDescription(`This is an example`)
				.setRequired(true);
			return option;
		}),
	/**
	 * @param {CommandInteraction} interaction
	 * @param {Client} client
	 */
	async execute(interaction, client) {
		/* the code to execute when the command is called */
	},
};
