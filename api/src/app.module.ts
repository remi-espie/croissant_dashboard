import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentsModule} from "./students/students.module";
import {PastriesModule} from "./pastries/pastries.module";
import {PromotionsModule} from "./promotions/promotions.module";
import { CroissantedModule } from './croissanted/croissanted.module';
import { QuoteService } from './quote/quote.service';
import { QuoteController } from './quote/quote.controller';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [StudentsModule, PastriesModule, PromotionsModule, CroissantedModule, QuoteModule],
  controllers: [AppController, QuoteController],
  providers: [AppService, QuoteService],
})
export class AppModule {}
