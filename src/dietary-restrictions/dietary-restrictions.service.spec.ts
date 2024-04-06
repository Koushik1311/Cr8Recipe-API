import { Test, TestingModule } from '@nestjs/testing';
import { DietaryRestrictionsService } from './dietary-restrictions.service';

describe('DietaryRestrictionsService', () => {
  let service: DietaryRestrictionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietaryRestrictionsService],
    }).compile();

    service = module.get<DietaryRestrictionsService>(DietaryRestrictionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
