import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JamEvent } from 'src/jam-events/jam-event.entity';
import { Repository } from 'typeorm';
import { CreateJamEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(JamEvent) private eventsRepository: Repository<JamEvent>,
  ) {}

  async create(
    createJamEventDto: CreateJamEventDto,
    userId: string,
  ): Promise<JamEvent> {
    const newEvent = this.eventsRepository.create({
      ...createJamEventDto,
      user: { id: userId },
    });

    return this.eventsRepository.save(newEvent);
  }

  async findAll(): Promise<JamEvent[]> {
    return this.eventsRepository.find({
      order: {
        eventDate: 'ASC',
      },
      relations: ['user'],
    });
  }
}
