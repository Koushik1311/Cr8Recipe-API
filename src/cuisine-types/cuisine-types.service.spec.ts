import { Test, TestingModule } from '@nestjs/testing';
import { CuisineTypesService } from './cuisine-types.service';

describe('CuisineTypesService', () => {
  let service: CuisineTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuisineTypesService],
    }).compile();

    service = module.get<CuisineTypesService>(CuisineTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
