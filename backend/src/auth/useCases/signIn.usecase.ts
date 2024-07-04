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
import { UserEntity } from 'src/user/entities/user.entity';
import { ConfigService } from 'src/general/service/config.service';

@Injectable()
export class SignInUseCase {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }
  async handle(
    signInInput: SingInInput,
  ): Promise<{ userId: string, accessToken: string; refreshToken: string }> {
    const { email } = signInInput;
    const user = await this.userRepository.findUserByEmail(email)
    const payload = { sub: user.id, email: email };
    return {
      userId: user.id,
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(payload, { expiresIn: '7d', secret: this.configService.authConfig.refreshToken }),
    };
  }
}
