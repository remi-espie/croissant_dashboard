import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {promotion} from "@prisma/client";
import {PromotionsService} from "./promotions.service";
import {PromotionsDto, PromotionDtoId} from "./promotions.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AdminGuard} from "../auth/admin-guard";

@Controller("promotion")
export class PromotionsController {
    constructor(private readonly promotionService: PromotionsService) {
    }

    // Create promotion -> POST /promotion
    @Post()
    //@UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async createPromotion(
        @Body() promotionData: PromotionsDto
    ): Promise<PromotionsDto> {
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

    // Get students data of a promotion
    @Get("/student/:id")
    async getStudentOf(@Param("id") id: string): Promise<promotion[]> {
        return this.promotionService.promotionStudent(String(id), String(id));
    }

    // Update promotion data -> PUT /promotion/:id
    @Put("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async updatePromotion(
        @Body() promotionData: PromotionsDto,
        @Param("id") id
    ): Promise<PromotionsDto> {
        const promotion = new PromotionDtoId(promotionData, id);
        return this.promotionService.updatePromotion(promotion);
    }

    // Delete promotion -> DELETE /promotion/:id
    @Delete("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async deletePromotion(@Param("id") id): Promise<promotion> {
        return this.promotionService.deletePromotion(id)
    }
}
