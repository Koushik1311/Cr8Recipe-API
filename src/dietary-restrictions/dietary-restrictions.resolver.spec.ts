import { Test, TestingModule } from '@nestjs/testing';
import { DietaryRestrictionsResolver } from './dietary-restrictions.resolver';
import { DietaryRestrictionsService } from './dietary-restrictions.service';

describe('DietaryRestrictionsResolver', () => {
  let resolver: DietaryRestrictionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietaryRestrictionsResolver, DietaryRestrictionsService],
    }).compile();

    resolver = module.get<DietaryRestrictionsResolver>(DietaryRestrictionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
