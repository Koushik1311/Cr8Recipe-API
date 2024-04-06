import { Injectable } from '@nestjs/common';
import { CreateDietaryRestrictionInput } from './dto/create-dietary-restriction.input';
import { UpdateDietaryRestrictionInput } from './dto/update-dietary-restriction.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DietaryRestrictionsService {
  constructor(private prisma: PrismaService) {}

  create(createDietaryRestrictionInput: CreateDietaryRestrictionInput) {
    return this.prisma.dietaryRestriction.create({
      data: createDietaryRestrictionInput,
    });
  }

  findAll() {
    return this.prisma.dietaryRestriction.findMany();
  }

  findOne(id: string) {
    return this.prisma.dietaryRestriction.findUnique({ where: { id } });
  }

  update(
    id: string,
    updateDietaryRestrictionInput: UpdateDietaryRestrictionInput,
  ) {
    return this.prisma.dietaryRestriction.update({
      where: { id },
      data: updateDietaryRestrictionInput,
    });
  }

  remove(id: string) {
    return this.prisma.dietaryRestriction.delete({ where: { id } });
  }
}
