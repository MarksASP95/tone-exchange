import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('jam_events')
export class JamEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string; // e.g., "Tuesday Bachata Social" or "Metal Guitar Jam"

  @Column('timestamp')
  eventDate: Date;

  @Column()
  location: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.events, { onDelete: 'CASCADE' })
  user: User;
}
