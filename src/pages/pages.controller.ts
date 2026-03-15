import { Controller, Get, Render } from '@nestjs/common';
import { EventsService } from 'src/events/events.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @Render('index')
  async getBoard() {
    const dbEvents = await this.eventsService.findAll();
    return {
      title: 'ToneExchange Jam Board',
      events: dbEvents,
    };
  }
}
