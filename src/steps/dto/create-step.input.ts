import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateStepInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(350)
  description: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  recipeId: string;
}
