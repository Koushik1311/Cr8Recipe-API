import { Injectable } from '@nestjs/common';
import { CreateCuisineTypeInput } from './dto/create-cuisine-type.input';
import { UpdateCuisineTypeInput } from './dto/update-cuisine-type.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CuisineTypesService {
  constructor(private prisma: PrismaService) {}

  create(createCuisineTypeInput: CreateCuisineTypeInput) {
    return this.prisma.cuisineType.create({ data: createCuisineTypeInput });
  }

  findAll() {
    return this.prisma.cuisineType.findMany();
  }

  findOne(id: string) {
    return this.prisma.cuisineType.findUnique({ where: { id } });
  }

  update(id: string, updateCuisineTypeInput: UpdateCuisineTypeInput) {
    return this.prisma.cuisineType.update({
      where: { id },
      data: updateCuisineTypeInput,
    });
  }

  remove(id: string) {
    return this.prisma.cuisineType.delete({ where: { id } });
  }
}
