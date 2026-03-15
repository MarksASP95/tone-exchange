// src/events/dto/create-jam-event.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateJamEventDto {
  @ApiProperty({
    example: 'Cool Jam Party',
    description: 'The title of the event',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Event date as ISO 8601 date string',
  })
  // Ensures the user sends a valid ISO 8601 date string
  @IsDateString()
  eventDate: Date;

  @ApiProperty({
    example: 'Altamira, Caracas, Venezuela',
    description: 'Location of the event',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: 'A jamming event for Jazz lovers',
    description: 'Description of the event',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
