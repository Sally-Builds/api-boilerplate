import { EmailType, emailQueue } from "@utils/bullQueue"


export const signup = async () => {
    //log user in
    emailQueue.add({ type: EmailType.OTP, data: { email: 'user@gmail.com', name: 'John doe' } })
}