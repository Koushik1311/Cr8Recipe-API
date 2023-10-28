import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    const valid = await bcrypt.compare(password, user?.password);

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }

  async signup(loginUserInput: LoginUserInput) {
    const user = await this.usersService.findOne(loginUserInput.email);
    const password = await bcrypt.hash(loginUserInput.password, 10);

    if (user) {
      throw new Error('User already exists!');
    }
    return this.usersService.create({
      ...loginUserInput,
      password,
    });
  }
}
