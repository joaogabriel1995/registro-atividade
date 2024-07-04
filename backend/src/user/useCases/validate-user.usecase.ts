import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { createUserInput } from '../dto/create-user-input.dto';
import { EncryptionUtil } from 'src/auth/utils/encryption.utils';
import { SingInInput } from 'src/auth/dto/signIn-input.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class ValidateUserUseCase {
  constructor(private userRepository: UserRepository) { }
  async handle(signInInput: SingInInput,
  ): Promise<UserEntity> {
    const { email, password } = signInInput;
    const userAlreadyExist = await this.userRepository.findUserByEmail(email);
    if (!userAlreadyExist) throw new UnauthorizedException();
    const { password: hash, id, ...rest } = userAlreadyExist;
    const isAuthenticated = await EncryptionUtil.comparePassword(
      password,
      hash,
    );
    if (!isAuthenticated) throw new UnauthorizedException();
    return userAlreadyExist
  }
}
