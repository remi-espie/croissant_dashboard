import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/studentsController';
import { PastriesService } from './pastries/pastries.service';
import { PastriesController } from './pastries/pastriesController';
import { PromotionsService } from './promotions/promotions.service';
import { PromotionsController } from './promotions/promotionsController';

@Module({
  imports: [],
  controllers: [AppController, StudentsController, PromotionsController, PastriesController],
  providers: [AppService, StudentsService, PastriesService, PromotionsService],
})
export class AppModule {}
