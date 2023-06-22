import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/usuarios')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.findAll();
  }
}
