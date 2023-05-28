import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalcService } from './calc.service';
 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('calculo')
export class CalcController{
  constructor(private readonly appService: CalcService){}

  @Get('1')
  getDados(): string{
    return this.appService.getDados();
  }

  @Get()
  postDados(): string{
    return this.appService.postDados();
  }
}