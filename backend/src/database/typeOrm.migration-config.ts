import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserEntity } from '../user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: Number(configService.get<string>('DATABASE_PORT')),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [UserEntity],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
