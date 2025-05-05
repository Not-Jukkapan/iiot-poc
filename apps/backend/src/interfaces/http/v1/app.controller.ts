import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../application/services/app.service';

@Controller('api')
// @Controller({ path: 'api', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greet')
  getHello(): string {
    return this.appService.getHello();
  }
}
