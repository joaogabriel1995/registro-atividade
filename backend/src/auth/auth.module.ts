import { Module } from '@nestjs/common';
import { EncryptionUtil } from './utils/encryption.utils';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/repositories/user.repository';
import { UserEntity } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignInUseCase } from './useCases/signIn.usecase';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from 'src/general/service/config.service';
import { GeneralModule } from 'src/general/general.module';
import { LocalStrategy } from './strategies/local.strategy';
import { ValidateUserUseCase } from 'src/user/useCases/validate-user.usecase';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { CreateRefreshToken } from './useCases/create-refresh-token.usecase';
import { RefreshStrategy } from './strategies/refresh-token.strategy';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.authConfig.token,
          signOptions: {expiresIn: "30s"}
        };
      },
      inject: [ConfigService],
      global: true,
    }),
  ],
  providers: [
    ValidateUserUseCase,
    EncryptionUtil,
    UserRepository,
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    LocalStrategy,
    JwtStrategy,
    RefreshStrategy,
    SignInUseCase,
    CreateRefreshToken,
    
  ],
  exports: [EncryptionUtil],
  controllers: [AuthController],
})
export class AuthModule {}
