import { Module } from '@nestjs/common';
import { AppController } from './http/v1/app.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [AppController],
})
export class InterfacesModule {}
