import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  create(createReviewInput: CreateReviewInput) {
    return this.prisma.review.create({ data: createReviewInput });
  }

  findAll() {
    return this.prisma.review.findMany();
  }

  update(id: string, updateReviewInput: UpdateReviewInput) {
    return this.prisma.review.update({
      where: { id },
      data: updateReviewInput,
    });
  }

  remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}
