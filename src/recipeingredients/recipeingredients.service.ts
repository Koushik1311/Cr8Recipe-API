import { Injectable } from '@nestjs/common';
import { CreateRecipeingredientInput } from './dto/create-recipeingredient.input';
import { UpdateRecipeingredientInput } from './dto/update-recipeingredient.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeingredientsService {
  constructor(private prisma: PrismaService) {}
  create(createRecipeingredientInput: CreateRecipeingredientInput) {
    return this.prisma.recipeIngredient.create({
      data: createRecipeingredientInput,
    });
  }

  findAll() {
    return this.prisma.recipeIngredient.findMany({
      include: {
        recipes: true,
        ingredients: true,
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} recipeingredient`;
  // }

  // update(id: number, updateRecipeingredientInput: UpdateRecipeingredientInput) {
  //   return `This action updates a #${id} recipeingredient`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} recipeingredient`;
  // }
}
