import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import Product from './Product';
import Buyer from './Buyer';

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  @OneToMany(
    type => Product,
    product => product.orderId
  )
  id: number;

  @Column()
  date: string;

  @Column({
    default: null 
  })
  @ManyToOne(
    type => Buyer,
    buyer => buyer.id
  )
  buyerId: number;
}
