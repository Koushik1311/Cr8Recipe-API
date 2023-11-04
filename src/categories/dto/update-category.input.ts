import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description?: string;
}
