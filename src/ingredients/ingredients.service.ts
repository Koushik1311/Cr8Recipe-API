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

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientInput: UpdateIngredientInput) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
