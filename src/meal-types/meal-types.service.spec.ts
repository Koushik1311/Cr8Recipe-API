import { Test, TestingModule } from '@nestjs/testing';
import { MealTypesService } from './meal-types.service';

describe('MealTypesService', () => {
  let service: MealTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealTypesService],
    }).compile();

    service = module.get<MealTypesService>(MealTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
