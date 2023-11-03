import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  @IsEmail()
  email?: string;

  @Field()
  @IsString()
  password?: string;

  @Field()
  @IsString()
  refreshToken?: string;
}
