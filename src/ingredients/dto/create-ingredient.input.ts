import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIngredientInput {
  @Field()
  name: string;
}
