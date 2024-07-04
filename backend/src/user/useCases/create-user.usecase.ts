import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { createUserInput } from '../dto/create-user-input.dto';
import { EncryptionUtil } from 'src/auth/utils/encryption.utils';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async handle(createUserInput: createUserInput) {
    const { password, email } = createUserInput;
    const userAlreadyExist = await this.userRepository.findUserByEmail(email);
    if (userAlreadyExist)
      throw new NotFoundException(
        `"This email is already in use. Please double-check if you've entered it correctly.`,
      );

    createUserInput.password =
      await EncryptionUtil.encryptionPassword(password);
    const user = await this.userRepository.create(createUserInput);
  }
}
