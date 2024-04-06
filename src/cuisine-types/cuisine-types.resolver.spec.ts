import { Test, TestingModule } from '@nestjs/testing';
import { CuisineTypesResolver } from './cuisine-types.resolver';
import { CuisineTypesService } from './cuisine-types.service';

describe('CuisineTypesResolver', () => {
  let resolver: CuisineTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuisineTypesResolver, CuisineTypesService],
    }).compile();

    resolver = module.get<CuisineTypesResolver>(CuisineTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
