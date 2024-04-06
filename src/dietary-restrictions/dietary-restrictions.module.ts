import { Module } from '@nestjs/common';
import { DietaryRestrictionsService } from './dietary-restrictions.service';
import { DietaryRestrictionsResolver } from './dietary-restrictions.resolver';

@Module({
  providers: [DietaryRestrictionsResolver, DietaryRestrictionsService],
})
export class DietaryRestrictionsModule {}
