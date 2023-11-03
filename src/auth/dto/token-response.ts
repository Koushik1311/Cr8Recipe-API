import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class TokenResponse {
  @Field()
  message: string;

  @Field()
  access_token: string;
}
