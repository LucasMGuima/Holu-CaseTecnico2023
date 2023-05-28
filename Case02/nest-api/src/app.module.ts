import { Module } from '@nestjs/common';
import { AppController, CalcController } from './app.controller';
import { AppService } from './app.service';
import { CalcService } from './calc.service';

@Module({
  imports: [],
  controllers: [AppController, CalcController],
  providers: [CalcService, AppService],
})
export class AppModule {}
