import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Review {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  rating: number;

  @Field()
  comment: string;
}
