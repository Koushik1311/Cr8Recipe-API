import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecipeingredientsService } from './recipeingredients.service';
import { Recipeingredient } from './entities/recipeingredient.entity';
import { CreateRecipeingredientInput } from './dto/create-recipeingredient.input';
import { UpdateRecipeingredientInput } from './dto/update-recipeingredient.input';
import { Public } from 'src/common/public.decorator';

@Resolver(() => Recipeingredient)
export class RecipeingredientsResolver {
  constructor(
    private readonly recipeingredientsService: RecipeingredientsService,
  ) {}

  @Public()
  @Mutation(() => Recipeingredient)
  createRecipeingredient(
    @Args('createRecipeingredientInput')
    createRecipeingredientInput: CreateRecipeingredientInput,
  ) {
    return this.recipeingredientsService.create(createRecipeingredientInput);
  }

  @Public()
  @Query(() => [Recipeingredient], { name: 'recipeingredients' })
  findAll() {
    return this.recipeingredientsService.findAll();
  }

  // @Query(() => Recipeingredient, { name: 'recipeingredient' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.recipeingredientsService.findOne(id);
  // }

  // @Mutation(() => Recipeingredient)
  // updateRecipeingredient(@Args('updateRecipeingredientInput') updateRecipeingredientInput: UpdateRecipeingredientInput) {
  //   return this.recipeingredientsService.update(updateRecipeingredientInput.id, updateRecipeingredientInput);
  // }

  // @Mutation(() => Recipeingredient)
  // removeRecipeingredient(@Args('id', { type: () => Int }) id: number) {
  //   return this.recipeingredientsService.remove(id);
  // }
}
