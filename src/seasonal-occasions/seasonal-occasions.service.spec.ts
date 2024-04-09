import { Test, TestingModule } from '@nestjs/testing';
import { SeasonalOccasionsService } from './seasonal-occasions.service';

describe('SeasonalOccasionsService', () => {
  let service: SeasonalOccasionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeasonalOccasionsService],
    }).compile();

    service = module.get<SeasonalOccasionsService>(SeasonalOccasionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
