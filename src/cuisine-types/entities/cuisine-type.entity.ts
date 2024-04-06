import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CuisineType {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  // @Field(() => [CuisineTypeRecipe], {nullable: true})
  // cuisineTypeRecipe: CuisineTypeRecipe[];
}
