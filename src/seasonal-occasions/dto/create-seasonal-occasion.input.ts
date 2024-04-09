import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateSeasonalOccasionInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;
}
