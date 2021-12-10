import * as nodemailer from 'nodemailer';
import mailConfig from './mail.config';
import mailBody from './mail.body';

class Mail {
    constructor() {}

    public initMail(message: string, name: string, company: string, phone: string, mail: string) {
        let bodyMail = mailBody.createBodyHTML(message, name, company, phone, mail)
        return {
            from: "gustavosocial1032@gmail.com",
            to: "gustavosocial1032@gmail.com",
            subject: "Teste",
            html: bodyMail
        }
    }

    public createTransporter () {
        return nodemailer.createTransport({
            host: mailConfig.host,
            port: mailConfig.port,
            auth: {
                user: mailConfig.user,
                pass: mailConfig.password
            }
        });
    }

    public sendMail(message: string, name: string, company: string, phone: string, mail: string) {
        let transporter = this.createTransporter();
        let mailOption = this.initMail(message, name, company, phone, mail)
        console.log(transporter)
        console.log(mailOption)

        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                return {
                    err: error,
                    men: 'Unexpected error'
                }
            } else {
                return "Email enviado com sucesso"
            }
        });
    }
}

export default new Mail