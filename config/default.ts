import dotenv from 'dotenv';
dotenv.config();

export default {
    port: parseInt(process.env.PORT || '3000'),
    host: process.env.HOST || 'localhost',
    database: {
        url: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'default_secret'
    }
};