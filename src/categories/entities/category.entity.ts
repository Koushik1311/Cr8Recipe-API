import { Field, ObjectType } from '@nestjs/graphql';
import { Recipe } from 'src/recipes/entities/recipe.entity';

@ObjectType()
export class Category {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [Recipe], { nullable: true })
  recipes: Recipe[] | null;
}
