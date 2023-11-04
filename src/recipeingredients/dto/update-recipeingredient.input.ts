import { CreateRecipeingredientInput } from './create-recipeingredient.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecipeingredientInput extends PartialType(CreateRecipeingredientInput) {
  @Field(() => Int)
  id: number;
}
