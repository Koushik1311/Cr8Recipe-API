import { Test, TestingModule } from '@nestjs/testing';
import { StepsResolver } from './steps.resolver';
import { StepsService } from './steps.service';

describe('StepsResolver', () => {
  let resolver: StepsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StepsResolver, StepsService],
    }).compile();

    resolver = module.get<StepsResolver>(StepsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
