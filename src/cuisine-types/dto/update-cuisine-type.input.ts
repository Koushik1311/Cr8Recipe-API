import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateCuisineTypeInput } from './create-cuisine-type.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCuisineTypeInput extends PartialType(
  CreateCuisineTypeInput,
) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name?: string;
}
