import { Module } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {QuoteController} from "./quote.controller";
import {QuoteService} from "./quote.service";

@Module({
    providers: [QuoteService, PrismaService],
    exports: [QuoteService],
    controllers: [QuoteController],
})
export class QuoteModule {}
