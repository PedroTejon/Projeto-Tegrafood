import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import router from './routes.js';
app.use(router);

// app.listen(3000, () => console.log('API RODANDO'))

https.createServer({
    cert: fs.readFileSync('src/ssl/code.crt'),
    key: fs.readFileSync('src/ssl/code.key')
}, app).listen(3001, () => console.log('Rodando em https'));