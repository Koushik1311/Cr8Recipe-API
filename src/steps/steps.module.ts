import { Module } from '@nestjs/common';
import { StepsService } from './steps.service';
import { StepsResolver } from './steps.resolver';

@Module({
  providers: [StepsResolver, StepsService],
})
export class StepsModule {}
