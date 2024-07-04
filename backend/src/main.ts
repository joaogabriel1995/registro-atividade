import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './general/service/config.service';
import { ConfigService as NestConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const nestConfigService = new NestConfigService();
  const configService = new ConfigService(nestConfigService);
  const {
    serverConfig: { port },
  } = configService;
  await app.listen(port);
}
bootstrap();
