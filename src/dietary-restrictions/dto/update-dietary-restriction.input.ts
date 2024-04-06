import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateDietaryRestrictionInput } from './create-dietary-restriction.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDietaryRestrictionInput extends PartialType(
  CreateDietaryRestrictionInput,
) {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;
}
