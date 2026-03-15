import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateJamEventDto } from './dto/create-event.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() CreateJamEventDto: CreateJamEventDto,
    @CurrentUser() user: any,
  ) {
    return this.eventsService.create(CreateJamEventDto, user.userId);
  }
}
