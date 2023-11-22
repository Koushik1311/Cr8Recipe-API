import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Public } from 'src/common/public.decorator';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Public()
  @Mutation(() => Recipe)
  createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ) {
    return this.recipesService.create(createRecipeInput);
  }

  @Public()
  @Query(() => [Recipe], { name: 'recipes' })
  findAll() {
    return this.recipesService.findAll();
  }

  @Query(() => Recipe, { name: 'recipe' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.recipesService.findOne(id);
  }

  @Mutation(() => Recipe)
  updateRecipe(
    id: string,
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
  ) {
    return this.recipesService.update(id, updateRecipeInput);
  }

  @Mutation(() => Recipe)
  removeRecipe(@Args('id', { type: () => String }) id: string) {
    return this.recipesService.remove(id);
  }
}
