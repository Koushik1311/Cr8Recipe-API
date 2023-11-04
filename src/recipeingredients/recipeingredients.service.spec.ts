import { Test, TestingModule } from '@nestjs/testing';
import { RecipeingredientsService } from './recipeingredients.service';

describe('RecipeingredientsService', () => {
  let service: RecipeingredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeingredientsService],
    }).compile();

    service = module.get<RecipeingredientsService>(RecipeingredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
