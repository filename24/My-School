import { Colors, EmbedBuilder, parseWebhookURL, userMention, WebhookClient } from "discord.js";
import { WebhookData } from "./Constants";

class Webhook extends WebhookClient {
  public readonly message: string;
  constructor(message: string) {
    const { id, token } = parseWebhookURL(WebhookData.url)
    super({
      id,
      token
    });
    this.message = message;

    this.send({
      content: userMention('949131762666205235'),
      embeds: [
        new EmbedBuilder()
          .setTitle("Error!")
          .setDescription('야생에 버그가 나타났다!')
          .setColor(Colors.Red)
          .addFields([
            {
              name: '오류 내용',
              value: message,
              inline: true
            }
          ])
      ]
    })
  }
}

export default Webhook;