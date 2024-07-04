import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { DatabaseConfig, IDatabaseConfig } from './database-config.service';
interface IAuthConfig {
  token: string;
  refreshToken: string
}

export class AuthConfig implements IAuthConfig {
  constructor(private configService: NestConfigService) {}
  token: string = this.configService.get<string>('AUTH_TOKEN');
  refreshToken: string = this.configService.get<string>('AUTH_REFRESH');

}

interface IServerConfig {
  port: number;
}

export class ServerConfig implements IServerConfig {
  constructor(private configService: NestConfigService) {}
  port: number = Number(this.configService.get<string>('SERVER_PORT'));
}

interface IConfigService {
  serverConfig: IServerConfig;
  postgresConfig: IDatabaseConfig;
  authConfig: IAuthConfig;
  validate: () => void;
}

@Injectable()
export class ConfigService implements IConfigService {
  public serverConfig: IServerConfig;
  public postgresConfig: IDatabaseConfig;
  public authConfig: IAuthConfig;
  constructor(private configService: NestConfigService) {
    this.serverConfig = new ServerConfig(this.configService);
    this.postgresConfig = new DatabaseConfig(this.configService);
    this.authConfig = new AuthConfig(this.configService);
    this.validate();
  }
  validate() {
    this.postgresConfig.validate();
  }
}
