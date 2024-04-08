import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateMealTypeInput } from './create-meal-type.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMealTypeInput extends PartialType(CreateMealTypeInput) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;
}
