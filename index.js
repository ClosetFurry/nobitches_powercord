const { Plugin } = require('powercord/entities');

module.exports = class bitches extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'nobitches',
            description: 'Use no-bitch.es API to generate a megamind meme.',
            usage: '{c}nobitches <text>',
            executor: this.bitches.bind(this)
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('nobitches');
    }

    async bitches(args) {
        const text = `${args}`
        return {
            send: true,
            result: `https://api.no-bitch.es/${text.replace(/,/g, '%20')}`
        };
    }
};