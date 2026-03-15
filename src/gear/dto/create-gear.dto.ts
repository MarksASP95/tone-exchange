import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class createGearDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  condition?: string;
}
