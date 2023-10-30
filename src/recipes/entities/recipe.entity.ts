import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => String)
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => String)
  title: string;

  @Field(() => String)
  slag: string;

  @Field(() => String)
  body: string;
}
