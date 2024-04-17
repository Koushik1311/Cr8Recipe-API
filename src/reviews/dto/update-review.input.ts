import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { CreateReviewInput } from './create-review.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(1)
  rating?: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  comment?: string;
}
