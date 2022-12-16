import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { PromotionsController } from "./promotions.controller";
import { PromotionsService } from "./promotions.service";

@Module({
    providers: [PromotionsService, PrismaService],
    exports: [PromotionsService],
    controllers: [PromotionsController],
})
export class PromotionsModule {}
