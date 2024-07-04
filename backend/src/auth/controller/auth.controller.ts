import { Body, Controller, Header, Post, Req, UseGuards } from '@nestjs/common';
import { SingInInput } from '../dto/signIn-input.dto';
import { SignInUseCase } from '../useCases/signIn.usecase';
import { Public } from '../decorators/public.decorator';
import { LocalAuthGuard } from '../guards/local.guard';
import { RefreshJwtGuard } from '../guards/refresh-token.guard';
import { CreateRefreshToken } from '../useCases/create-refresh-token.usecase';

@Controller('auth')
export class AuthController {
  constructor(private signInUseCase: SignInUseCase, private createRefreshToken:CreateRefreshToken) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async singIn(@Body() signInInput: SingInInput) {
    return await this.signInUseCase.handle(signInInput);
  }
  @Public()
  @UseGuards(RefreshJwtGuard)
  @Post('token')
  async refreshToken(@Body() refreshToken: string, @Req() request: any ) {
    const user = request.user
    return await this.createRefreshToken.handle( user.email, user.id);
  }
}
