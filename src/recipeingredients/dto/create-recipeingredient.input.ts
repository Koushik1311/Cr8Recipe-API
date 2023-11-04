import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeingredientInput {
  @Field()
  quantity: number;

  @Field()
  unit: string;

  @Field()
  recipeId: string;

  @Field()
  ingredientId: string;
}
