import { Test, TestingModule } from '@nestjs/testing';
import { RecipeingredientsResolver } from './recipeingredients.resolver';
import { RecipeingredientsService } from './recipeingredients.service';

describe('RecipeingredientsResolver', () => {
  let resolver: RecipeingredientsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeingredientsResolver, RecipeingredientsService],
    }).compile();

    resolver = module.get<RecipeingredientsResolver>(RecipeingredientsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
