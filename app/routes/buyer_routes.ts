import {Request, Response} from 'express';

import Buyer from '../models/Buyer';

export default function buyerRoutes(app: any, connection: any) {
  app.get('/buyers', async (request: Request, response: Response) => {
    try {
      const buyerRepository = connection.getRepository(Buyer);

      let query = request.query;
      const buyers = await buyerRepository.find(query);

      response.send(buyers);  
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });

  app.post('/buyers', async (request: Request, response: Response) => {
    try {
      const buyerRepository = connection.getRepository(Buyer);
    
      let buyer = request.body;
      const result = await buyerRepository.save(buyer);

      response.send(result);
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });

  app.delete('/buyers', async (request: Request, response: Response) => {
    try {
      const buyerRepository = connection.getRepository(Buyer);

      let query = request.query;
      const result = await buyerRepository.delete(query);

      response.send(result);
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });

  app.put('/buyers', async (request: Request, response: Response) => {
    try {
      const buyerRepository = connection.getRepository(Buyer);

      let query = request.query;
      let buyer = request.body;
      const result = await buyerRepository.update(query, buyer);

      response.send(result);
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });
};
