import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [PrismaModule, RecipesModule],
})
export class AppModule {}
