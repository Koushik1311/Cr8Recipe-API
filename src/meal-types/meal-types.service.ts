import { Injectable } from '@nestjs/common';
import { CreateMealTypeInput } from './dto/create-meal-type.input';
import { UpdateMealTypeInput } from './dto/update-meal-type.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealTypesService {
  constructor(private prisma: PrismaService) {}

  create(createMealTypeInput: CreateMealTypeInput) {
    return this.prisma.mealType.create({ data: createMealTypeInput });
  }

  findAll() {
    return this.prisma.mealType.findMany();
  }

  findOne(id: string) {
    return this.prisma.mealType.findUnique({ where: { id } });
  }

  update(id: string, updateMealTypeInput: UpdateMealTypeInput) {
    return this.prisma.mealType.update({
      where: { id },
      data: updateMealTypeInput,
    });
  }

  remove(id: string) {
    return this.prisma.mealType.delete({ where: { id } });
  }
}
