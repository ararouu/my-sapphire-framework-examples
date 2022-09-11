import { Listener, Events } from "@sapphire/framework";
import { config } from "../../config.js";

export class ReadyListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      event: Events.ClientReady,
    });
  }

  async run(client) {
    this.container.logger.info(
      "Logged into " + client.user.tag + " (" + client.user.id + ")."
    );
}
