import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { DomainModule } from 'src/domain/domain.module';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [DomainModule, InfrastructureModule],
  providers: [AppService],
  exports: [AppService], // เผื่อให้ interfaces เรียกใช้
})
export class ApplicationModule {}
