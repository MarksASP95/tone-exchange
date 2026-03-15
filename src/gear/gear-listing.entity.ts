import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('gear_listings')
export class GearListing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 'Used' })
  condition: string;

  @ManyToOne(() => User, (user) => user.gearListings, { onDelete: 'CASCADE' })
  user: User;
}
