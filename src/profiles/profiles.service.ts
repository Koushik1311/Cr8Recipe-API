import { Injectable } from '@nestjs/common';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  create(createProfileInput: CreateProfileInput) {
    return this.prisma.profile.create({
      data: createProfileInput,
    });
  }

  // findAll() {
  //   return `This action returns all profiles`;
  // }

  findOne(id: string) {
    return this.prisma.profile.findUnique({
      where: { id },
    });
  }

  update(id: string, updateProfileInput: UpdateProfileInput) {
    return this.prisma.profile.update({
      where: { id },
      data: updateProfileInput,
    });
  }

  remove(id: string) {
    return this.prisma.profile.delete({ where: { id } });
  }
}
