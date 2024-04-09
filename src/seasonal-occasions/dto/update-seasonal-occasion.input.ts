import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateSeasonalOccasionInput } from './create-seasonal-occasion.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeasonalOccasionInput extends PartialType(
  CreateSeasonalOccasionInput,
) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name?: string;
}
