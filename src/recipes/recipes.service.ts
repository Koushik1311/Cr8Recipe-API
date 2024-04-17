import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeInput: CreateRecipeInput) {
    return this.prisma.recipe.create({
      data: createRecipeInput,
    });
  }

  findAll() {
    return this.prisma.recipe.findMany();
  }

  findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: {
        recipeingredients: {
          include: {
            ingredients: true,
          },
        },
        instruction: true,
      },
    });
  }

  update(id: string, updateRecipeInput: UpdateRecipeInput) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeInput,
    });
  }

  remove(id: string) {
    return this.prisma.recipe.delete({ where: { id } });
  }

  // New Recipes
  findNew() {
    let lastDay = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return this.prisma.recipe.findMany({
      where: {
        createdAt: {
          gte: lastDay,
        },
      },
    });
  }
}
