import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StepsService } from './steps.service';
import { Step } from './entities/step.entity';
import { CreateStepInput } from './dto/create-step.input';
import { UpdateStepInput } from './dto/update-step.input';
import { Public } from 'src/common/public.decorator';

@Resolver(() => Step)
export class StepsResolver {
  constructor(private readonly stepsService: StepsService) {}

  @Public()
  @Mutation(() => Step)
  createStep(@Args('createStepInput') createStepInput: CreateStepInput) {
    return this.stepsService.create(createStepInput);
  }

  @Query(() => [Step], { name: 'steps' })
  findAll() {
    return this.stepsService.findAll();
  }

  @Query(() => Step, { name: 'step' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.stepsService.findOne(id);
  }

  @Mutation(() => Step)
  updateStep(
    id: string,
    @Args('updateStepInput') updateStepInput: UpdateStepInput,
  ) {
    return this.stepsService.update(id, updateStepInput);
  }

  @Mutation(() => Step)
  removeStep(@Args('id', { type: () => String }) id: string) {
    return this.stepsService.remove(id);
  }
}
