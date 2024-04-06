import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DietaryRestrictionsService } from './dietary-restrictions.service';
import { DietaryRestriction } from './entities/dietary-restriction.entity';
import { CreateDietaryRestrictionInput } from './dto/create-dietary-restriction.input';
import { UpdateDietaryRestrictionInput } from './dto/update-dietary-restriction.input';
import { Public } from 'src/common/public.decorator';

@Resolver(() => DietaryRestriction)
export class DietaryRestrictionsResolver {
  constructor(
    private readonly dietaryRestrictionsService: DietaryRestrictionsService,
  ) {}

  @Public()
  @Mutation(() => DietaryRestriction)
  createDietaryRestriction(
    @Args('createDietaryRestrictionInput')
    createDietaryRestrictionInput: CreateDietaryRestrictionInput,
  ) {
    return this.dietaryRestrictionsService.create(
      createDietaryRestrictionInput,
    );
  }

  @Public()
  @Query(() => [DietaryRestriction], { name: 'dietaryRestrictions' })
  findAll() {
    return this.dietaryRestrictionsService.findAll();
  }

  @Query(() => DietaryRestriction, { name: 'dietaryRestriction' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.dietaryRestrictionsService.findOne(id);
  }

  @Mutation(() => DietaryRestriction)
  updateDietaryRestriction(
    id: string,
    @Args('updateDietaryRestrictionInput')
    updateDietaryRestrictionInput: UpdateDietaryRestrictionInput,
  ) {
    return this.dietaryRestrictionsService.update(
      id,
      updateDietaryRestrictionInput,
    );
  }

  @Mutation(() => DietaryRestriction)
  removeDietaryRestriction(@Args('id', { type: () => String }) id: string) {
    return this.dietaryRestrictionsService.remove(id);
  }
}
