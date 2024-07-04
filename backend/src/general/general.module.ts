import { Global, Module } from '@nestjs/common';
import { ConfigService } from './service/config.service';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Global()
@Module({
  exports: [ConfigService],
  providers: [ConfigService, NestConfigService],
})
export class GeneralModule {}
