import {Request, Response} from 'express';

import Product from '../models/Product';

export default function productRoutes(app: any, connection: any) {
  app.get('/products', async (request: Request, response: Response) => {
    try {
      const productRepository = connection.getRepository(Product);

      let query = request.query;
      const products = await productRepository.find(query);

      response.send(products);
    } catch (err) {
      console.log(err);
      response.send({'Error':'Error'});
    }
  });

  app.post('/products', async (request: Request, response: Response) => {
    try {
      const productRepository = connection.getRepository(Product);

      let product = request.body;
      const result = await productRepository.save(product);

      response.send(result);    
    } catch (err) {
      console.log(err);
      response.send({'Error':'Error'});
    }
  });

  app.delete('/products', async (request: Request, response: Response) => {
    try {
      const productRepository = connection.getRepository(Product);

      let query = request.query;
      const result = await productRepository.delete(query);
    
      response.send(result);
    } catch (err) {
      console.log(err);
      response.send({'Error':'Error'});
    }
  });

  app.put('/products', async (request: Request, response: Response) => {
    try {
      const productRepository = connection.getRepository(Product);

      let query = request.query;
      let product = request.body;
      const result = await productRepository.update(query, product);

      response.send(result);
    } catch (err) {
      console.log(err);
      response.send({'Error':'Error'});
    }
  });
};
