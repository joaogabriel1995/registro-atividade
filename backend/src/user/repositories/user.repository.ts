import { InjectRepository } from '@nestjs/typeorm';
import { createUserInput } from '../dto/create-user-input.dto';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from './user.repository.interface';
import { Repository } from 'typeorm';
import { createUserOutput } from '../dto/create-user-output.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepositoryOrm: Repository<UserEntity>,
  ) {}

  async create(input: createUserInput): Promise<createUserOutput> {
    const user = new UserEntity(input);
    const data = await this.userRepositoryOrm.save(user);
    const { password, updatedAt, ...rest } = data;
    return rest;
  }
  async findUserByEmail(email: string): Promise<UserEntity | null> {
    const data = await this.userRepositoryOrm.findOne({
      where: { email: email },
    });
    return data;
  }
  async findUserById(id: string): Promise<UserEntity> {
    const data = await this.userRepositoryOrm.findOne({
      where: { id: id },
    });
    return data;
  }
}
