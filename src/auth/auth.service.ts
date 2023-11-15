import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { SignupUserInput } from './dto/signup-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  // Signup
  async signup(signupUserInput: SignupUserInput) {
    const user = await this.usersService.findOne(signupUserInput.email);
    const password = await bcrypt.hash(signupUserInput.password, 10);

    try {
      if (user) {
        console.error('User already exists!');
        return { message: 'User already exists!' };
      }

      const new_user = this.usersService.create({
        ...signupUserInput,
        password,
      });

      const payload = {
        sub: (await new_user).id,
        email: (await new_user).email,
        updatedAt: (await new_user).updatedAt,
      };

      const refreshToken = await this.jwtService.signAsync(payload, {
        expiresIn: 60 * 60 * 24 * 28,
      });

      await this.updateRefreshToken((await new_user).id, refreshToken);

      return {
        message: 'User created successfully',
      };
    } catch (error: any) {
      console.error(`Signup failed: ${error.message}`);
      return { error: 'An error occurred during signup.' };
    }
  }

  // Login
  async login(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      updatedAt: user.updatedAt,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: 60 * 15,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: 60 * 60 * 24 * 28,
    });

    await this.updateRefreshToken(user.id, refreshToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      // check if not needed delete user
      user,
    };
  }

  // Logout
  async logout(user: User) {
    if (!user || !user.id) {
      return {
        message: 'Invalid user or missing ID information',
      };
    }

    const get_user = await this.prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!get_user) {
      return {
        message: 'No user found!',
      };
    }

    await this.prisma.user.updateMany({
      where: {
        id: get_user.id,
        refreshToken: {
          not: null,
        },
      },
      data: {
        refreshToken: null,
      },
    });

    return {
      message: 'Logout Successfully!',
    };
  }

  // Generate new Access Token
  async refreshJwtToken(user: User) {
    if (!user || !user.id) {
      return {
        message: 'Invalid user or missing ID information',
      };
    }

    const get_user = await this.prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!get_user) {
      return {
        message: 'No user found!',
      };
    }

    const refreshToken = user.refreshToken;

    const valid = await bcrypt.compare(refreshToken, get_user?.refreshToken);

    if (!valid) return { message: 'Access Denied!' };

    const payload = {
      sub: user.id,
      email: user.email,
      updatedAt: user.updatedAt,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: 60 * 15,
    });

    return {
      message: 'Token generate Successfull',
      access_token: accessToken,
    };
  }

  // Update Refresh Token to the Database
  async updateRefreshToken(id: string, refresh_token: string) {
    const refreshToken = await bcrypt.hash(refresh_token, 10);
    await this.usersService.update(id, { refreshToken });
  }

  // Validation
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    const valid = await bcrypt.compare(password, user?.password);

    // TODO: return error message and handle exception

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
