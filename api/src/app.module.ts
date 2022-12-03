import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentsModule} from "./students/students.module";
import {PastriesModule} from "./pastries/pastries.module";
import {PromotionsModule} from "./promotions/promotions.module";
import { CroissantedModule } from './croissanted/croissanted.module';

@Module({
  imports: [StudentsModule, PastriesModule, PromotionsModule, CroissantedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
