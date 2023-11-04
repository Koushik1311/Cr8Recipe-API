import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Recipeingredient } from 'src/recipeingredients/entities/recipeingredient.entity';
import { Recipe } from 'src/recipes/entities/recipe.entity';

@ObjectType()
export class Ingredient {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field(() => [Recipeingredient], { nullable: true })
  recipes: Recipeingredient[];
}
