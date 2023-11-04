import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;
}
