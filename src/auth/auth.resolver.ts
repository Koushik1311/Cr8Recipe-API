import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guard/gql-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { SignupUserInput } from './dto/signup-user.input';
import { SignupResponse } from './dto/signup-response';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LogoutResponse } from './dto/logout.response';
import { JwtRefreshTokenGuard } from './guard/jwt-refresh-token.guard';
import { TokenResponse } from './dto/token-response';
import { Public } from 'src/common/public.decorator';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => SignupResponse)
  signup(@Args('signupUserInput') signupUserInput: SignupUserInput) {
    return this.authService.signup(signupUserInput);
  }

  @Public()
  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => LogoutResponse)
  logout(@Context() context) {
    return this.authService.logout(context.user);
  }

  @Public()
  @Mutation(() => TokenResponse)
  @UseGuards(JwtRefreshTokenGuard)
  refreshJwtToken(@Context() context) {
    return this.authService.refreshJwtToken(context.user);
  }
}
