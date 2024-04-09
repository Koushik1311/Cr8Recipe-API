import { Injectable } from '@nestjs/common';
import { CreateSeasonalOccasionInput } from './dto/create-seasonal-occasion.input';
import { UpdateSeasonalOccasionInput } from './dto/update-seasonal-occasion.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeasonalOccasionsService {
  constructor(private prisma: PrismaService) {}

  create(createSeasonalOccasionInput: CreateSeasonalOccasionInput) {
    return this.prisma.seasonalOccasion.create({
      data: createSeasonalOccasionInput,
    });
  }

  findAll() {
    return this.prisma.seasonalOccasion.findMany({
      include: {
        SeasonalOccasionRecipe: {
          include: {
            recipe: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.seasonalOccasion.findUnique({ where: { id } });
  }

  update(id: string, updateSeasonalOccasionInput: UpdateSeasonalOccasionInput) {
    return this.prisma.seasonalOccasion.update({
      where: { id },
      data: updateSeasonalOccasionInput,
    });
  }

  remove(id: string) {
    return this.prisma.seasonalOccasion.delete({ where: { id } });
  }
}
