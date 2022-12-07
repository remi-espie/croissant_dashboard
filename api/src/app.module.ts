import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentsModule} from "./students/students.module";
import {PastriesModule} from "./pastries/pastries.module";
import {PromotionsModule} from "./promotions/promotions.module";
import { CroissantedModule } from './croissanted/croissanted.module';
import { QuoteModule } from './quote/quote.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [StudentsModule, PastriesModule, PromotionsModule, CroissantedModule, QuoteModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
