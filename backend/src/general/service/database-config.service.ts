import { ConfigService as NestConfigService } from '@nestjs/config';

export interface IDatabaseConfig {
  port: number;
  host: string;
  username: string;
  password: string;
  database: string;
  type: string;
  validate: () => Record<string, string> | true;
}

export class DatabaseConfig implements IDatabaseConfig {
  public username: string;
  public password: string;
  public host: string;
  public port: number;
  public database: string;
  public type: string;

  constructor(private configService: NestConfigService) {
    this.username = this.configService.get<string>('DATABASE_USERNAME');
    this.password = this.configService.get<string>('DATABASE_PASSWORD');
    this.host = this.configService.get<string>('DATABASE_HOST');
    this.port = Number(this.configService.get<string>('DATABASE_PORT'));
    this.database = this.configService.get<string>('DATABASE_NAME');
    this.type = this.configService.get<string>('DATABASE_TYPE');
  }
  validate() {
    let errors: Record<string, string> | null = null;
    if (!this.username) {
      const message =
        'The database username is undefined. Please check the configuration and provide a valid username to access the database.';
      errors['username'] = message;
    }
    if (!this.password) {
      const message =
        'The database password is undefined. Please check the configuration and provide a valid password to access the database.';
      errors['password'] = message;
    }
    if (!this.host) {
      const message =
        'The database host is undefined. Please check the configuration and provide a valid host to access the database.';
      errors['host'] = message;
    }
    if (!this.port) {
      const message =
        'The database port is undefined. Please check the configuration and provide a valid port to access the database.';
      errors['port'] = message;
    }
    if (!this.database) {
      const message =
        'The database name is undefined. Please check the configuration and provide a valid database name to access the database.';
      errors['database'] = message;
    }
    if (!this.type) {
      const message =
        'The database type is undefined. Please check the configuration and provide a valid type to access the database.';
      errors['type'] = message;
    }
    if (!errors) {
      return errors;
    }
    return true;
  }
}
