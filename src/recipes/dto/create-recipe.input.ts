import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field()
  title: string;

  @Field()
  slag: string;

  @Field()
  body: string;
}
