import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {pastry} from "@prisma/client";
import {PastriesService} from "./pastries.service";
import {PastriesDto, PastriesDtoId} from "./pastries.dto";

@Controller("pastry")
export class PastriesController {
    constructor(private readonly pastriesService: PastriesService) {
    }

    // Create pastry -> POST /pastry
    @Post()
    async createPromotion(
        @Body() pastryData: PastriesDto
    ): Promise<PastriesDto> {
        return this.pastriesService.createPastry(pastryData);
    }

    // Get pastry data -> GET /pastry/:id or name
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<pastry> {
        return this.pastriesService.pastry(String(id), String(id));
    }

    // Get all pastries data
    @Get("/all")
    async getAllPastry() {
        return this.pastriesService.getAllPastry();
    }

    // Update pastry data -> PUT /pastry/:id
    @Put("/:id")
    async updatePastry(
        @Body() pastryData: PastriesDtoId
    ): Promise<PastriesDtoId> {
        return this.pastriesService.updatePastry(pastryData);
    }

    // Delete pastry -> DELETE /pastry/:id
    @Delete("/:id")
    async deletePastry(@Param("id") id): Promise<pastry> {
        return this.pastriesService.deletePastry(id)
    }

}