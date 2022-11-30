import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentsModule} from "./students/students.module";
import {PastriesModule} from "./pastries/pastries.module";
import {PromotionsModule} from "./promotions/promotions.module";

@Module({
  imports: [StudentsModule, PastriesModule, PromotionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
