import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  @ApiResponse({ status: 200, description: 'The record has been successfully created.' })
  getHello(): string {
    return this.appService.getHello();
  }
}
