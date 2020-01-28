import {Request, Response} from 'express';

import Order from '../models/Order';

export default function orderRoutes(app: any, connection: any) {
  app.get('/orders', async (request: Request, response: Response) => {
    try {
      const orderRepository = connection.getRepository(Order);

      let query = request.query;
      const orders = await orderRepository.find(query);

      response.send(orders); 
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });

  app.post('/orders', async (request: Request, response: Response) => {
    try {
      const orderRepository = connection.getRepository(Order);

      let order = request.body;
      if (!order.date) {
        order.date = Date.now().toString();
      }
    
      const result = await orderRepository.save(order); 

      response.send(result);  
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });

  app.delete('/orders', async (request: Request, response: Response) => {
    try {
      const orderRepository = connection.getRepository(Order);

      let query = request.query;
      const result = await orderRepository.delete(query);

      response.send(result);  
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });

  app.put('/orders', async (request: Request, response: Response) => {
    try {
      const orderRepository = connection.getRepository(Order);

      let query = request.query;
      let order = request.body;
      const result = await orderRepository.update(query, order);

      response.send(result);
    } catch (err) {
      console.log(err);
      response.send({'Error': 'Error'});
    }
  });
};



