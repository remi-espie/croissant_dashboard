import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {croissanted} from "@prisma/client";
import {CroissantedService} from "./croissanted.service";
import {CroissantedDto, CroissantedDtoId} from "./croissanted.dto";

@Controller("croissanted")
export class CroissantedController {
    constructor(private readonly croissantedService: CroissantedService) {
    }

    // Create croissanted -> POST /croissanted
    @Post()
    async createPromotion(
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
    async updateCroissanted(
        @Body() croissantedData: CroissantedDtoId
    ): Promise<CroissantedDtoId> {
        return this.croissantedService.updateCroissanted(croissantedData);
    }

    // Delete croissanted -> DELETE /croissanted/:id
    @Delete("/:id")
    async deleteCroissanted(@Param("id") id): Promise<croissanted> {
        return this.croissantedService.deleteCroissanted(id)
    }

}