import { Test, TestingModule } from '@nestjs/testing';
import { GearService } from './gear.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GearListing } from './gear-listing.entity';

describe('GearService', () => {
  let service: GearService;

  const mockGearRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((listing) => Promise.resolve({ id: 'uuid-123' })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GearService,
        {
          provide: getRepositoryToken(GearListing),
          useValue: mockGearRepository,
        },
      ],
    }).compile();

    service = module.get<GearService>(GearService);
  });

  it('should successfully create a gear listing', async () => {
    const dto = {
      title: 'Fender Stratocaster',
      description: 'Mint condition',
      price: 1200,
    };
    const userId = 'user-456';

    const result = await service.create(dto, userId);

    expect(mockGearRepository.create).toHaveBeenCalledWith({
      ...dto,
      user: { id: userId },
    });

    expect(result).toEqual({
      id: 'uuid-123',
      ...dto,
      user: { id: userId },
    });
  });
});
