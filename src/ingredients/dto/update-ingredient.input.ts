import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { CreateIngredientInput } from './create-ingredient.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIngredientInput extends PartialType(CreateIngredientInput) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;
}
