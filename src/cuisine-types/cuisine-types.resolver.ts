import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CuisineTypesService } from './cuisine-types.service';
import { CuisineType } from './entities/cuisine-type.entity';
import { CreateCuisineTypeInput } from './dto/create-cuisine-type.input';
import { UpdateCuisineTypeInput } from './dto/update-cuisine-type.input';
import { Public } from 'src/common/public.decorator';

@Resolver(() => CuisineType)
export class CuisineTypesResolver {
  constructor(private readonly cuisineTypesService: CuisineTypesService) {}

  @Public()
  @Mutation(() => CuisineType)
  createCuisineType(
    @Args('createCuisineTypeInput')
    createCuisineTypeInput: CreateCuisineTypeInput,
  ) {
    return this.cuisineTypesService.create(createCuisineTypeInput);
  }

  @Public()
  @Query(() => [CuisineType], { name: 'cuisineTypes' })
  findAll() {
    return this.cuisineTypesService.findAll();
  }

  @Query(() => CuisineType, { name: 'cuisineType' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.cuisineTypesService.findOne(id);
  }

  @Mutation(() => CuisineType)
  updateCuisineType(
    id: string,
    @Args('updateCuisineTypeInput')
    updateCuisineTypeInput: UpdateCuisineTypeInput,
  ) {
    return this.cuisineTypesService.update(id, updateCuisineTypeInput);
  }

  @Mutation(() => CuisineType)
  removeCuisineType(@Args('id', { type: () => String }) id: string) {
    return this.cuisineTypesService.remove(id);
  }
}
