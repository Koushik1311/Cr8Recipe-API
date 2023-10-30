import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignupUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  refreshToken?: string;

  @Field()
  refreshTokenExpiry?: Date;
}
