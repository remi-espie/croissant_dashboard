import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsService } from './students/students.service';
import { PastriesService } from './pastries/pastries.service';
import { PromotionsService } from './promotions/promotions.service';
import {StudentsModule} from "./students/students.module";
import {PastriesModule} from "./pastries/pastries.module";
import {PromotionsModule} from "./promotions/promotions.module";

@Module({
  imports: [StudentsModule, PastriesModule, PromotionsModule],
  controllers: [AppController],
  providers: [AppService, StudentsService, PastriesService, PromotionsService],
})
export class AppModule {}
