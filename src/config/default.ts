import dotenv from 'dotenv';
dotenv.config();


interface IConfig {
    NODE_ENV: string;
    port: number;
    host: string;
    dbUrl: string;
    dbUrlTest: string;
    jwtSecret: string;
    passwordSalt: number;
    otpLength: number;
    otpDuration: number;
    email: string;
    emailPassword: string;
    emailHost: string;
    emailPort: number;
    aws_bucket_name: string;
    aws_access_key: string;
    aws_secret_key: string;
    aws_region: string;
}


export default {
    NODE_ENV: process.env.NODE_ENV || "test",
    port: parseInt(process.env.PORT || '3000'),
    host: process.env.HOST || 'localhost',
    dbUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
    dbUrlTest: process.env.DATABASE_URL_TEST || 'mongodb://localhost:27017/myapp_test',
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
    passwordSalt: process.env.PASSWORD_SALT || 12,
    otpLength: 6,
    otpDuration: 10,
    email: process.env.EMAIL || 'uzoagulujoshua@yahoo.com',
    emailPassword: process.env.EMAIL_PASSWORD || 'password',
    emailHost: process.env.EMAIL_HOST || 'email host',
    emailPort: process.env.EMAIL_PORT || 456,
    aws_bucket_name: process.env.AWS_BUCKET_NAME || "",
    aws_access_key: process.env.AWS_ACCESS_KEY || "",
    aws_secret_key: process.env.AWS_SECRET_KEY || "",
    aws_region: process.env.AWS_REGION || "",
} as IConfig;