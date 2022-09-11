import { WebhookClient } from "discord.js";
export const sendWebhook = {
  embed: function (token: string, id: string, embed: string) {
    if (!token) throw "You must provide a webhook token.";

    if (!id) throw "You must provide a webhook ID.";

    if (!embed) throw "You must provide an embed.";

    const webhook = new WebhookClient({
      id: id,
      token: token,
    });
    webhook.send({ embeds: [embed] }).catch((err) => err);
  },
  regular: function (token: string, id: string, content: string) {
    if (!token) throw "You must provide a webhook token.";

    if (!id) throw "You must provide a webhook ID.";

    if (!content) throw "You must provide an embed.";

    const webhook_ = new WebhookClient({
      id: id,
      token: token,
    });
    webhook_.send({ content: content }).catch((err) => err);
  },
};
