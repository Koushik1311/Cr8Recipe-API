import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MealTypesService } from './meal-types.service';
import { MealType } from './entities/meal-type.entity';
import { CreateMealTypeInput } from './dto/create-meal-type.input';
import { UpdateMealTypeInput } from './dto/update-meal-type.input';

@Resolver(() => MealType)
export class MealTypesResolver {
  constructor(private readonly mealTypesService: MealTypesService) {}

  @Mutation(() => MealType)
  createMealType(
    @Args('createMealTypeInput') createMealTypeInput: CreateMealTypeInput,
  ) {
    return this.mealTypesService.create(createMealTypeInput);
  }

  @Query(() => [MealType], { name: 'mealTypes' })
  findAll() {
    return this.mealTypesService.findAll();
  }

  @Query(() => MealType, { name: 'mealType' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.mealTypesService.findOne(id);
  }

  @Mutation(() => MealType)
  updateMealType(
    id: string,
    @Args('updateMealTypeInput') updateMealTypeInput: UpdateMealTypeInput,
  ) {
    return this.mealTypesService.update(id, updateMealTypeInput);
  }

  @Mutation(() => MealType)
  removeMealType(@Args('id', { type: () => String }) id: string) {
    return this.mealTypesService.remove(id);
  }
}
