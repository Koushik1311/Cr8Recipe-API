import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { CreateStepInput } from './create-step.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStepInput extends PartialType(CreateStepInput) {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  order?: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(350)
  description?: string;
}
