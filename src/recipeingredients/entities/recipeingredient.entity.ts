import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';

@ObjectType()
export class Recipeingredient {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  quantity: number;

  @Field()
  unit: string;

  @Field(() => Ingredient, { nullable: true })
  ingredients: Ingredient;
}
