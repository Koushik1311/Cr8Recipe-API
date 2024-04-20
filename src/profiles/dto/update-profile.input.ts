import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateProfileInput } from './create-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProfileInput extends PartialType(CreateProfileInput) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  name?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description?: string;
}
