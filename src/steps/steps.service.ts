import { Injectable } from '@nestjs/common';
import { CreateStepInput } from './dto/create-step.input';
import { UpdateStepInput } from './dto/update-step.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StepsService {
  constructor(private prisma: PrismaService) {}

  create(createStepInput: CreateStepInput) {
    return this.prisma.step.create({ data: createStepInput });
  }

  findAll() {
    return this.prisma.step.findMany();
  }

  findOne(id: string) {
    return this.prisma.step.findUnique({ where: { id } });
  }

  update(id: string, updateStepInput: UpdateStepInput) {
    return this.prisma.step.update({
      where: { id },
      data: updateStepInput,
    });
  }

  remove(id: string) {
    return this.prisma.step.delete({ where: { id } });
  }
}
