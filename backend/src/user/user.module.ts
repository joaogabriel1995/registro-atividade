import { Module } from '@nestjs/common';
import { CreateUserController } from './controllers/create-user.controller';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { AuthModule } from 'src/auth/auth.module';
import { EncryptionUtil } from 'src/auth/utils/encryption.utils';
import { ValidateUserUseCase } from './useCases/validate-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [CreateUserController],
  providers: [UserRepository, CreateUserUseCase, EncryptionUtil, ValidateUserUseCase],
  exports: [ValidateUserUseCase]
})
export class UserModule {}
