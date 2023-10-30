import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import { SignupUserInput } from './dto/signup-user.input';

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

  private generateRefreshToken(): string {
    const refreshToken = bcrypt.hashSync(Math.random().toString(), 10);

    return refreshToken;
  }

  async refreshTokens(refreshToken: string) {
    const user = await this.verifyRefreshToken(refreshToken);

    if (user) {
      const payload = {
        sub: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      const accessToken = await this.jwtService.signAsync(payload);

      return {
        access_token: accessToken,
        user,
      };
    }

    return null;
  }

  async verifyRefreshToken(refreshToken: string): Promise<User | null> {
    const user = await this.usersService.getUserByRefreshToken(refreshToken);

    if (
      user &&
      user.refreshTokenExpiry &&
      user.refreshTokenExpiry > new Date()
    ) {
      return user;
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
    const accessToken = await this.jwtService.signAsync(payload);

    const refreshToken = this.generateRefreshToken();
    const refreshTokenExpiry = new Date();
    refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 30);

    await this.usersService.setRefreshToken(
      user.id,
      refreshToken,
      refreshTokenExpiry,
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user,
    };
  }

  async signup(signupUserInput: SignupUserInput) {
    const user = await this.usersService.findOne(signupUserInput.email);
    const password = await bcrypt.hash(signupUserInput.password, 10);

    if (user) {
      throw new Error('User already exists!');
    }

    const refreshToken = this.generateRefreshToken();
    const refreshTokenExpiry = new Date();
    refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 30);

    return this.usersService.create({
      ...signupUserInput,
      password,
      refreshToken,
      refreshTokenExpiry,
    });
  }
}
