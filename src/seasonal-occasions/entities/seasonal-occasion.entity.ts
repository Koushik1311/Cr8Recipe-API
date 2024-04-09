import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Recipe } from 'src/recipes/entities/recipe.entity';

@ObjectType()
export class SeasonalOccasion {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field(() => [Recipe], { nullable: true })
  recipes: Recipe[];
}
