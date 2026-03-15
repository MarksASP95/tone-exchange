import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JamEvent } from 'src/jam-events/jam-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JamEvent])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
