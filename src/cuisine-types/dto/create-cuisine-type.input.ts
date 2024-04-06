import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateCuisineTypeInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;
}
