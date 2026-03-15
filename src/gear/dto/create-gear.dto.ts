import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class createGearDto {
  @ApiProperty({
    example: 'Fender Stratocaster 1998',
    description: 'The title of the listing',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Mint condition, barely played.',
    description: 'Detailed description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 1200.5, description: 'Price in USD' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ example: 'Used - Excellent', default: 'Used' })
  @IsString()
  @IsOptional()
  condition?: string;
}
