import Bull from 'bull'
import { EmailService } from './email/email.service';


const options = {
    redis: {
        port: 6379,
        host: "127.0.0.1",
        username: "default",
    }
}

export enum EmailType {
    WELCOME = 'WELCOME_EMAIL',
    OTP = 'OTP_EMAIL',
    VERIFY = 'VERIFY_EMAIL'
}

export interface EmailJobData {
    type: EmailType;
    data: any;
}

export const emailQueue = new Bull<EmailJobData>('emailQueue', options);


emailQueue.process(async (job: Bull.Job<EmailJobData>) => {
    const { type, data } = job.data;

    const emailService = new EmailService();

    switch (type) {
        case EmailType.OTP:
            await emailService.sendOTP(data);
            break;
        default:
            //log error and notify admin
            throw new Error(`Unknown email type: ${type}`);
    }
})