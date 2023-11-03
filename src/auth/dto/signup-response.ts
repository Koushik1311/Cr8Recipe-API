import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class SignupResponse {
  @Field()
  refreshToken?: string;

  @Field(() => User)
  user?: User;

  @Field()
  message: string;
}
