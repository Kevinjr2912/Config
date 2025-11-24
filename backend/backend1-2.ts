import express from 'express';
import { config } from './core/config';

const app = express();
const PORT = Number(config.PORT_SERVER) || 4000;

app.get('/', (req, res) => {
  res.send('Hola, mundo, desde el server 1');
});

app.listen(PORT,() => { console.log("Server running on http://localhost:"+PORT)});