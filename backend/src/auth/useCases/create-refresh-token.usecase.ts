import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { UserRepository } from 'src/user/repositories/user.repository';
  import { EncryptionUtil } from '../utils/encryption.utils';
  import { SingInInput } from '../dto/signIn-input.dto';
  import { JwtService } from '@nestjs/jwt';
  import { ValidateUserUseCase } from 'src/user/useCases/validate-user.usecase';
import { ConfigService } from 'src/general/service/config.service';
  
  @Injectable()
  export class CreateRefreshToken {
    constructor(
      private userRepository: UserRepository,
      private jwtService: JwtService,
      private validateUserUseCase: ValidateUserUseCase,
      private configService: ConfigService
    ) {}
    async handle(
      email: string,
      id: string
    ): Promise<{ token: string }> {
      const user = await this.userRepository.findUserById(id)
      if (user){
        const payload = { sub: user.id, email: email };
        return {
          token: await this.jwtService.signAsync(payload),
        };
      }
    }
  }
  