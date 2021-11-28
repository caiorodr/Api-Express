import express from 'express';
import cors from 'cors';
import routes from './routs';

const app = express();

app.use(cors()); // permitir quais urls vao acessar o nosso back-end
app.use(routes);

app.listen(3333);