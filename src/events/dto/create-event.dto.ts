// src/events/dto/create-jam-event.dto.ts
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateJamEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  // Ensures the user sends a valid ISO 8601 date string
  @IsDateString()
  eventDate: Date;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
