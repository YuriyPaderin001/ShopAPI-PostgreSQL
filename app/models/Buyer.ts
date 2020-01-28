import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import Order from './Order';

@Entity()
export default class Buyer {
  @PrimaryGeneratedColumn()
  @OneToMany(
    type => Order,
    order => order.buyerId
  )
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;
}
