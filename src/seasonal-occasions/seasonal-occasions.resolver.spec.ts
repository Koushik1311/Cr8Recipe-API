import { Test, TestingModule } from '@nestjs/testing';
import { SeasonalOccasionsResolver } from './seasonal-occasions.resolver';
import { SeasonalOccasionsService } from './seasonal-occasions.service';

describe('SeasonalOccasionsResolver', () => {
  let resolver: SeasonalOccasionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeasonalOccasionsResolver, SeasonalOccasionsService],
    }).compile();

    resolver = module.get<SeasonalOccasionsResolver>(SeasonalOccasionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
