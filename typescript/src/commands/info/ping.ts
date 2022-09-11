import { Command } from "@sapphire/framework";
import { Stopwatch } from "@sapphire/stopwatch";
import { Message } from "discord.js";

 export class PingCmd extends Command {
  constructor(context: Command.Context, options: Command.Options) {
   super(context, {
     ...options,
     name: "ping",
     description: "Pings the bot and displays the latency.",
     aliases: ["pong"]
    });
}
    public override async messageRun(message: Message) {
     const stopwatch = new Stopwatch(0).start();
     await message.channel.send({ content: "Pinging..." }).then((msg) => {
      stopwatch.stop();
      msg.edit({ content: `Pong! Latency: \`${stopwatch}\`` });
   });
 }
