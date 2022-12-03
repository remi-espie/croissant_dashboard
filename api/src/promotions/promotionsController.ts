import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {promotion} from "@prisma/client";
import {PromotionsService} from "./promotions.service";

@Controller("promotion")
export class PromotionsController {
    constructor(private readonly promotionService: PromotionsService) {
    }

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

    // Get all promotions data
    @Get("/all")
    async getAllPromotion() {
        return this.promotionService.getAllPromotion();
    }

    // Update promotion data -> PUT /promotion/:id
    @Put("/:id")
    async updatePromotion(
        @Body() promotionData: { id: string; name: string; year: number; url_schedule: string; url_picture: string; }
    ): Promise<promotion> {
        return this.promotionService.updatePromotion(promotionData);
    }

    // Delete promotion -> DELETE /promotion/:id
    @Delete("/:id")
    async deletePromotion(@Param("id") id): Promise<promotion> {
        return this.promotionService.deletePromotion(id)
    }
}