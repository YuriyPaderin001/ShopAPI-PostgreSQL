import productRoutes from './product_routes';
import buyerRoutes from './buyer_routes';
import orderRoutes from './order_routes';

export default function router(app: any, connection: any) {
  productRoutes(app, connection);
  buyerRoutes(app, connection);
  orderRoutes(app, connection);
}
