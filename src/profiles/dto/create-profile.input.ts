import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  userId: string;
}
