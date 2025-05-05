import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InterfacesModule } from './interfaces/interfaces.module';

@Module({
  imports: [
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
    InterfacesModule,
  ],
})
export class AppModule {}
