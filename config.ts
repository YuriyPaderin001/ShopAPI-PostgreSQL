import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Product from './app/models/Product';
import Buyer from './app/models/Buyer';
import Order from './app/models/Order';

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'shopapi',
  password: 'p@ssw0rd',
  database: 'shopdb',
  synchronize: true,
  logging: false,
  entities: [
    Product,
    Buyer,
    Order
  ]
};

export {typeOrmConfig};
