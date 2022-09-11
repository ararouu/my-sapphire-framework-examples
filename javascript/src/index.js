import { SapphireClient, container, LogLevel } from "@sapphire/framework";
import { config } from "./config.js";

const client = new Client({
  intents: 32767, //All intents.
  partials: [""], //Add partials if needed.
  defaultPrefix: config.bot.prefix,
  loadMessageCommandListeners: true, //Loads commands usable with prefixes.
  caseInsensitiveCommands: true, //Allows members to use commands with command name or alias being case insensitive.
  logger: {
   level: LogLevel.Debug //Allows logging of debug and higher.
    }
  });


client.login(config.bot.token);
