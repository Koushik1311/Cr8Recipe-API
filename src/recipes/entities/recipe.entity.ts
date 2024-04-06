import { Field, ObjectType } from '@nestjs/graphql';
import { Recipeingredient } from 'src/recipeingredients/entities/recipeingredient.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Recipe {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field()
  slag: string;

  @Field(() => User)
  author: User;

  @Field({ nullable: true })
  description: string | null;

  @Field({ nullable: true })
  cookingTime: number | null;

  @Field()
  imageUrl: string;

  @Field(() => [Recipeingredient], { nullable: true })
  recipeingredients: Recipeingredient[];

  //   @Field(() => [StepEntity], { nullable: 'items' })
  //   Step: StepEntity[];
}
