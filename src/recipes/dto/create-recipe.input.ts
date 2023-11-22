import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  slag: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  cookingTime: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  userId: string;

  @Field()
  @IsString()
  categoryId: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

  @Field()
  @IsNotEmpty()
  imageUrl: string;
}
