import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryInput: CreateCategoryInput) {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll() {
    return this.prisma.category.findMany({
      include: {
        recipes: true,
      },
    });
  }

  findByPartialTitle(partialTitle: string) {
    const foundCategories = this.prisma.category.findMany({
      where: {
        title: {
          contains: partialTitle.toLowerCase(),
          mode: 'insensitive',
        },
      },
    });

    return foundCategories || [];
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryInput,
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
