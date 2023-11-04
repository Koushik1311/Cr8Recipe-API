import { Injectable } from '@nestjs/common';
import { CreateIngredientInput } from './dto/create-ingredient.input';
import { UpdateIngredientInput } from './dto/update-ingredient.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  create(createIngredientInput: CreateIngredientInput) {
    return this.prisma.ingredient.create({ data: createIngredientInput });
  }

  findAll() {
    return this.prisma.ingredient.findMany();
  }

  findOne(id: string) {
    return this.prisma.ingredient.findUnique({ where: { id } });
  }

  update(id: string, updateIngredientInput: UpdateIngredientInput) {
    return this.prisma.ingredient.update({
      where: { id },
      data: updateIngredientInput,
    });
  }

  remove(id: string) {
    return this.prisma.ingredient.delete({
      where: { id },
    });
  }
}
