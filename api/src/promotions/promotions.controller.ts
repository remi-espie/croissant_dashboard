import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param, Patch,
    Post,
    Res, StreamableFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {promotion} from "@prisma/client";
import {PromotionsService} from "./promotions.service";
import {PromotionsDto, PromotionDtoId} from "./promotions.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AdminGuard} from "../auth/admin-guard";
import {isUUID} from "class-validator";
import {FastifyReply} from "fastify";

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
        if (isUUID(id)) return this.promotionService.promotionId(id)
        else return this.promotionService.promotionName(String(id))
    }

    @Get("/:id/schedule")
    async schedule(@Res({ passthrough: true }) res: FastifyReply, @Param("id") id: string): Promise<StreamableFile> {
        if (isUUID(id)) return this.promotionService.schedule(res, id)
        else return this.promotionService.scheduleName(res, String(id))
    }

    // Get all promotions data
    @Get("/all")
    async getAllPromotion() {
        return this.promotionService.getAllPromotion();
    }

    // Get students data of a promotion
    @Get("/:id/student")
    async getStudentOf(@Param("id") id: string): Promise<promotion[]> {
        if (isUUID(id)) return this.promotionService.promotionStudentId(id);
        else return this.promotionService.promotionStudentName(String(id));
    }

    // Get croissanted data of a promotion
    @Get("/:id/croissanted")
    async getCroissantedOf(@Param("id") id: string): Promise<promotion[]> {
        if (isUUID(id)) return this.promotionService.promotionCroissantedId(id);
        else return this.promotionService.promotionCroissantedName(String(id));
    }

    // Get all croissanted (even bought ones) data of a promotion
    @Get("/:id/croissanted/all")
    async getAllCroissantedOf(@Param("id") id: string): Promise<promotion[]> {
        if (isUUID(id)) return this.promotionService.promotionCroissantedAllId(id);
        else return this.promotionService.promotionCroissantedAllName(String(id));
    }

    // Update promotion data -> PUT /promotion/:id
    @Patch("/:id")
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
