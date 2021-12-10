import { Router } from "express";
import Mail from '../Mail/mail.service'

const routers = Router();

routers.get('/', (req, res) => {
    res.send('Welcome a MailAPI')
});

routers.post('/send', (req, res) => {
    const message = req.body.message;
    const phone = req.body.phone;
    const name = req.body.name;
    const company = req.body.company;
    const mail = req.body.mail;
    let result = Mail.sendMail(message, name, company, phone, mail)
    console.log(result)
    res.status(200).json({ result: result })
});

export default routers;