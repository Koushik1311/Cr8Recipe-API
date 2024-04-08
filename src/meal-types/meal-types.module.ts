import { Module } from '@nestjs/common';
import { MealTypesService } from './meal-types.service';
import { MealTypesResolver } from './meal-types.resolver';

@Module({
  providers: [MealTypesResolver, MealTypesService],
})
export class MealTypesModule {}
