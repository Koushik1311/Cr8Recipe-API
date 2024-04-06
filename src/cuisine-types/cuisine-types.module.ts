import { Module } from '@nestjs/common';
import { CuisineTypesService } from './cuisine-types.service';
import { CuisineTypesResolver } from './cuisine-types.resolver';

@Module({
  providers: [CuisineTypesResolver, CuisineTypesService],
})
export class CuisineTypesModule {}
