import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Step {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  order: number;

  @Field()
  description: string;
}
