import 'reflect-metadata';

import {createConnection} from 'typeorm';
import * as express from 'express';
import {Request, Response} from 'express';
import * as bodyParser from 'body-parser'; 

import router from './app/routes/index';

import {typeOrmConfig} from './config';
import Product from './app/models/Product';
import Buyer from './app/models/Buyer';
import Order from './app/models/Order';

(async () => {
  const port = 8888;

  const app = express();
  
  app.use(bodyParser.urlencoded({extended: true}));

  const connection = await createConnection(typeOrmConfig);
  router(app, connection);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})();
