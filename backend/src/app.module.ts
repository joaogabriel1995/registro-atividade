import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { GeneralModule } from './general/general.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { PartnerCompanyModule } from './partner-company/partner-company.module';
import { ProjectModule } from './project/project.module';
import { WorkHoursLogModule } from './work-hours-log/work-hours-log.module';

@Module({
  imports: [
    UserModule,
    GeneralModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    AuthModule,
    CompanyModule,
    PartnerCompanyModule,
    ProjectModule,
    WorkHoursLogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
