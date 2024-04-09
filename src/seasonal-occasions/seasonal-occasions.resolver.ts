import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeasonalOccasionsService } from './seasonal-occasions.service';
import { SeasonalOccasion } from './entities/seasonal-occasion.entity';
import { CreateSeasonalOccasionInput } from './dto/create-seasonal-occasion.input';
import { UpdateSeasonalOccasionInput } from './dto/update-seasonal-occasion.input';
import { Public } from 'src/common/public.decorator';

@Resolver(() => SeasonalOccasion)
export class SeasonalOccasionsResolver {
  constructor(
    private readonly seasonalOccasionsService: SeasonalOccasionsService,
  ) {}

  @Public()
  @Mutation(() => SeasonalOccasion)
  createSeasonalOccasion(
    @Args('createSeasonalOccasionInput')
    createSeasonalOccasionInput: CreateSeasonalOccasionInput,
  ) {
    return this.seasonalOccasionsService.create(createSeasonalOccasionInput);
  }

  @Public()
  @Query(() => [SeasonalOccasion], { name: 'seasonalOccasions' })
  findAll() {
    return this.seasonalOccasionsService.findAll();
  }

  @Query(() => SeasonalOccasion, { name: 'seasonalOccasion' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.seasonalOccasionsService.findOne(id);
  }

  @Mutation(() => SeasonalOccasion)
  updateSeasonalOccasion(
    id: string,
    @Args('updateSeasonalOccasionInput')
    updateSeasonalOccasionInput: UpdateSeasonalOccasionInput,
  ) {
    return this.seasonalOccasionsService.update(
      id,
      updateSeasonalOccasionInput,
    );
  }

  @Mutation(() => SeasonalOccasion)
  removeSeasonalOccasion(@Args('id', { type: () => String }) id: string) {
    return this.seasonalOccasionsService.remove(id);
  }
}
