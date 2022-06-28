import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bcaf2ac9b5d365",
    pass: "dd6e230b9c5279"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Feedback <fb@feedbk.com>',
      to: 'John Doe <john.doe@feedbk.com>',
      subject,
      html: body,
    });
  }
}
