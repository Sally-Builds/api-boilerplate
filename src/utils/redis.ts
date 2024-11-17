import Redis from 'ioredis'


let redisClient: Redis | null = null;
export const connectRedis = () => {
    if (!redisClient) {
        redisClient = new Redis({
            port: 6379,
            host: "127.0.0.1",
            username: "default",
            // other options...
        });

        redisClient.on('connect', () => {
            console.log('Redis connected on port 6379');
        });

        redisClient.on('error', (err) => {
            console.error('Redis connection error:', err);
        });
    }

    return redisClient;
};