import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    const createdUser = this.prisma.user.create({
      data: createUserInput,
    });
    return createdUser;
  }

  // Find all users TODO: Close this endpoint if not needed(Pending)
  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async setRefreshToken(
    id: string,
    refreshToken: string,
    expiration: Date,
  ): Promise<void> {
    await this.prisma.user.update({
      where: { id: id },
      data: { refreshToken, refreshTokenExpiry: expiration },
    });
  }

  async getUserByRefreshToken(refreshToken: string) {
    return this.prisma.user.findUnique({
      where: { refreshToken },
    });
  }
}
