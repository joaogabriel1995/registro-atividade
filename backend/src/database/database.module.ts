import { Module } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'src/general/service/config.service';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.postgresConfig.host,
        port: configService.postgresConfig.port,
        username: configService.postgresConfig.username,
        password: configService.postgresConfig.password,
        database: configService.postgresConfig.database,
        entities: [UserEntity],
        migrations: [__dirname + '/migrations'],
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService, NestConfigService],
})
export class DatabaseModule {}
