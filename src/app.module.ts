import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipeingredientsModule } from './recipeingredients/recipeingredients.module';
import { CuisineTypesModule } from './cuisine-types/cuisine-types.module';
import { DietaryRestrictionsModule } from './dietary-restrictions/dietary-restrictions.module';
import { MealTypesModule } from './meal-types/meal-types.module';
import { SeasonalOccasionsModule } from './seasonal-occasions/seasonal-occasions.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    AuthModule,
    RecipesModule,
    IngredientsModule,
    RecipeingredientsModule,
    CuisineTypesModule,
    DietaryRestrictionsModule,
    MealTypesModule,
    SeasonalOccasionsModule,
    ReviewsModule,
    ProfilesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
