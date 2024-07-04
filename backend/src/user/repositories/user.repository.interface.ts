import { createUserInput } from '../dto/create-user-input.dto';
import { createUserOutput } from '../dto/create-user-output.dto';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  create(input: createUserInput): Promise<createUserOutput>;
  findUserByEmail(email: string): Promise<UserEntity>;
  findUserById(id: string): Promise<UserEntity>;

}
