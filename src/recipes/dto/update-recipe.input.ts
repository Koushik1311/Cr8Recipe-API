import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { CreateRecipeInput } from './create-recipe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecipeInput extends PartialType(CreateRecipeInput) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  slag?: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  cookingTime?: number;

  @Field()
  @IsString()
  categoryId?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  imageUrl?: string;
}
