import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(1)
  rating: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  comment: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  userId: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  recipeId: string;
}
