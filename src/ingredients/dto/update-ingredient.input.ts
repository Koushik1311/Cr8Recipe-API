import { CreateIngredientInput } from './create-ingredient.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIngredientInput extends PartialType(CreateIngredientInput) {
  @Field()
  name: string;

  @Field()
  slag: string;
}
