import { Listener, Events, SapphireClient } from "@sapphire/framework";
import { config } from "../../config.js";

export class ReadyListener extends Listener {
  constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      event: Events.ClientReady,
    });
  }

  public override async run(client: SapphireClient) {
    this.container.logger.info(
      "Logged into " + client.user?.tag + " (" + client.user?.id + ")."
    );
}
