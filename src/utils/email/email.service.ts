import path from 'path'
import nodemailer from 'nodemailer'
import ejs from 'ejs';
import config from '../../config/default'
import { EmailAbstract, IOTPEmail } from './email.abstract';


const FROM = `"COMPANY NAME" <${config.email}>`
const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: config.emailPort,
    service: 'yahoo',
    secure: false,
    auth: {
        user: config.email,
        pass: config.emailPassword
    },
})


export class EmailService implements EmailAbstract {

    public async sendOTP({ subject, recipient, name, otp }: IOTPEmail): Promise<void> {
        console.log('entered')
        const templatePath = path.join(__dirname, '../../../../templates', 'sendOTP.ejs');
        console.log(templatePath)
        const htmlContent = await ejs.renderFile(templatePath, { otp, client_name: name, expiry_time: config.otpDuration });
        try {
            await transporter.sendMail({
                subject: subject,
                from: FROM,
                to: recipient,
                html: htmlContent
            })
            console.log('email sent successfully')
        } catch (e) {
            //do nth
            console.log(e, 'email error')
        }
    }
}