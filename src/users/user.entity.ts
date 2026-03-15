import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GearListing } from '../gear-listings/gear-listing.entity';
import { JamEvent } from '../jam-events/jam-event.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => GearListing, (listing) => listing.user)
  gearListings: GearListing[];

  @OneToMany(() => JamEvent, (event) => event.user)
  events: JamEvent[];
}
