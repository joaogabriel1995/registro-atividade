import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SignInUseCase } from '../useCases/signIn.usecase';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { UserRepository } from 'src/user/repositories/user.repository';
import { ValidateUserUseCase } from 'src/user/useCases/validate-user.usecase';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private validateUserUseCase: ValidateUserUseCase,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<UserEntity> {
    const userAlreadyExist = await this.validateUserUseCase.handle({email, password});
    if (!userAlreadyExist) throw new UnauthorizedException();
    return userAlreadyExist;
  }
}
