import { Command } from "@sapphire/framework";
import { Stopwatch } from "@sapphire/stopwatch";

 export class PingCmd extends Command {
  constructor(context, options) {
   super(context, {
     ...options,
     name: "ping",
     description: "Pings the bot and displays the latency.",
     aliases: ["pong"]
    });
}
    async messageRun(message) {
     const stopwatch = new Stopwatch(0).start();
     await message.channel.send({ content: "Pinging..." }).then((msg) => {
      stopwatch.stop();
      msg.edit({ content: `Pong! Latency: \`${stopwatch}\`` });
   });
 }
