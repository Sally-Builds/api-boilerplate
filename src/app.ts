import express from 'express'
import cors from 'cors'
import config from 'config'
import logger from './utils/logger';

const app = express();

const PORT = config.get<number>('port');
console.log(PORT)

const configObj = config.util.toObject();
console.log(configObj)

app.use(cors())


// app.use

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})