import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DietaryRestriction {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;
}
