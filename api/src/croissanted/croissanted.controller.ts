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
import {croissanted} from "@prisma/client";
import {CroissantedService} from "./croissanted.service";
import {CroissantedDto, CroissantedDtoId} from "./croissanted.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AdminGuard} from "../auth/admin-guard";

@Controller("croissanted")
export class CroissantedController {
    constructor(private readonly croissantedService: CroissantedService) {
    }

    // Create croissanted -> POST /croissanted
    @Post()
    async createCroissanted(
        @Body() croissantedData: CroissantedDto
    ): Promise<CroissantedDto> {
        return this.croissantedService.createCroissanted(croissantedData);
    }

    // Get croissanted data -> GET /croissanted/:id or name
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<croissanted> {
        return this.croissantedService.croissanted(String(id));
    }

    // Get all croissanted data
    @Get("/all")
    async getAllCroissanted() {
        return this.croissantedService.getAllCroissanted();
    }

    // Update croissanted data -> PUT /croissanted/:id
    @Put("/:id")
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async updateCroissanted(
        @Body() croissantedData: CroissantedDtoId
    ): Promise<CroissantedDtoId> {
        return this.croissantedService.updateCroissanted(croissantedData);
    }

    // Delete croissanted -> DELETE /croissanted/:id
    @Delete("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async deleteCroissanted(@Param("id") id): Promise<croissanted> {
        return this.croissantedService.deleteCroissanted(id)
    }

}
