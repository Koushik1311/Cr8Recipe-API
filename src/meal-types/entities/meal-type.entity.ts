import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class MealType {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;
}
