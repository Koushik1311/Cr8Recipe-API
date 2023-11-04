import { Module } from '@nestjs/common';
import { RecipeingredientsService } from './recipeingredients.service';
import { RecipeingredientsResolver } from './recipeingredients.resolver';

@Module({
  providers: [RecipeingredientsResolver, RecipeingredientsService],
})
export class RecipeingredientsModule {}
