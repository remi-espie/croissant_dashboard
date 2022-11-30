import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {promotion} from "@prisma/client";
import {PromotionsService} from "./promotions.service";

@Controller("promotion")
export class PromotionsController {
    constructor(private readonly promotionService: PromotionsService) {}
    // Create promotion -> POST /promotion
    @Post()
    async createPromotion(
        @Body() promotionData: { name: string; year: number; url_schedule: string; url_picture: string; }
    ): Promise<promotion> {
        return this.promotionService.createPromotion(promotionData);
    }

    // Get promotion data -> GET /promotion/:id or name
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<promotion> {
        return this.promotionService.promotion(String(id), String(id))
    }

}