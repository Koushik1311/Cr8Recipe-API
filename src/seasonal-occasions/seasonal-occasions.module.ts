import { Module } from '@nestjs/common';
import { SeasonalOccasionsService } from './seasonal-occasions.service';
import { SeasonalOccasionsResolver } from './seasonal-occasions.resolver';

@Module({
  providers: [SeasonalOccasionsResolver, SeasonalOccasionsService],
})
export class SeasonalOccasionsModule {}
