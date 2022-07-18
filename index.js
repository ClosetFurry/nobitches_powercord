const { Plugin } = require('powercord/entities');

function urlEncoder(v) {
    v = v
      .replaceAll("%", "%25")
      .replaceAll("\\", "%5C")
      .replaceAll("<", "%3C")
      .replaceAll("?", "%3F")
      .replaceAll(" ", "%20")
      .replaceAll("!", "%21")
      .replaceAll("@", "%40")
      .replaceAll("#", "%23")
      .replaceAll(";", "%3B")
      .replaceAll(":", "%3A");
    return v;
  }

module.exports = class bitches extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'nobitches',
            description: 'Use https://api.no-bitch.es to send a "no bitches?" meme with custom text.',
            usage: '{c}nobitches <text>',
            executor: (args) => {
                return {
                    send: true,
                    result: `https://api.no-bitch.es/${urlEncoder(args.join(" "))}`
                }
              }
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('nobitches');
    }

};
