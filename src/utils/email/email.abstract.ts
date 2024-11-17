export interface IOTPEmail {
    subject: string, recipient: string, name: string, otp: string
}
export abstract class EmailAbstract {

    public abstract sendOTP(payload: IOTPEmail): Promise<void>;

}