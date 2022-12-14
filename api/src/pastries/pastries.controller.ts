import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {pastry} from "@prisma/client";
import {PastriesService} from "./pastries.service";
import {PastriesDto, PastriesDtoId} from "./pastries.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AdminGuard} from "../auth/admin-guard";
import {isUUID} from "class-validator";

@Controller("pastry")
export class PastriesController {
    constructor(private readonly pastriesService: PastriesService) {
    }

    // Create pastry -> POST /pastry
    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async createPastry(
        @Body() pastryData: PastriesDto
    ): Promise<PastriesDto> {
        return this.pastriesService.createPastry(pastryData);
    }

    // Get pastry data -> GET /pastry/:id or name
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<pastry> {
        if (isUUID(id)) return this.pastriesService.pastryId(id)
        else return this.pastriesService.pastryName(String(id));
    }

    // Get all pastries data
    @Get("/all")
    async getAllPastry() {
        return this.pastriesService.getAllPastry();
    }

    // Update pastry data -> PATCH /pastry/:id
    @Patch("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async updatePastry(
        @Body() pastryData: PastriesDto,
        @Param("id") id
    ): Promise<PastriesDtoId> {
        const pastry = new PastriesDtoId(pastryData, id);
        return this.pastriesService.updatePastry(pastry);
    }

    // Delete pastry -> DELETE /pastry/:id
    @Delete("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async deletePastry(@Param("id") id): Promise<pastry> {
        return this.pastriesService.deletePastry(id)
    }

}
