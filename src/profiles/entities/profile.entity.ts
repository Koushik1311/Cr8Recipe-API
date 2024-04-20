import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field()
  description: string;
}
