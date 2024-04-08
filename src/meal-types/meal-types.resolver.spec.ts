import { Test, TestingModule } from '@nestjs/testing';
import { MealTypesResolver } from './meal-types.resolver';
import { MealTypesService } from './meal-types.service';

describe('MealTypesResolver', () => {
  let resolver: MealTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealTypesResolver, MealTypesService],
    }).compile();

    resolver = module.get<MealTypesResolver>(MealTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
