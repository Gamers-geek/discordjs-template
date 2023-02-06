const { client } = require("../index");

client.on(`interactionCreate`, async (interaction) => {
	if (!interaction.isCommand()) return;

	const commandName = interaction.commandName;
	const command = client.commands.get(commandName);

	if (!command) return;

	try {
		command.execute(interaction, client);
	} catch (err) {
		console.error(err);
		return interaction.reply({
			content: `An error occured : \`${err}\``,
			ephemeral: true,
		});
	}
});
