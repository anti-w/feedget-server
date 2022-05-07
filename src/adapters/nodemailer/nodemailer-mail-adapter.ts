import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4e8ba5412474f5",
    pass: "f190ee9f133cf6",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <ninjaguy@feedget.com>",
      to: "Wendel Demétrio <hey.wendel97@gmail.com>",
      subject,
      html: body,
    });
  }
}
