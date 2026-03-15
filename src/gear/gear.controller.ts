import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GearService } from './gear.service';
import { createGearDto } from './dto/create-gear.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('gear')
export class GearController {
  constructor(private readonly gearService: GearService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createGearDto: createGearDto, @CurrentUser() user: any) {
    return this.gearService.create(createGearDto, user.userId);
  }

  @Get()
  findAll() {
    return this.gearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gearService.findOne(id);
  }
}
