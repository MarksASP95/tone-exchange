import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GearListing } from './gear-listing.entity';
import { Repository } from 'typeorm';
import { createGearDto } from './dto/create-gear.dto';

@Injectable()
export class GearService {
  constructor(
    @InjectRepository(GearListing)
    private gearRepository: Repository<GearListing>,
  ) {}

  async create(
    createGearDto: createGearDto,
    userId: string,
  ): Promise<GearListing> {
    const listing = this.gearRepository.create({
      ...createGearDto,
      user: { id: userId },
    });

    return this.gearRepository.save(listing);
  }

  async findAll(): Promise<GearListing[]> {
    return this.gearRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<GearListing> {
    const listing = await this.gearRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!listing) {
      throw new NotFoundException(`Gear listing with ID ${id} not found`);
    }

    return listing;
  }
}
