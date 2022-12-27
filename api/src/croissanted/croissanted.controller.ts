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

    // Create croissanted -> POST /croissanted/:studentId
    @Post("/:studentId")
    async createCroissanted(@Param("studentId") studentId: string,
                            @Body() croissantedData: CroissantedDto
    ): Promise<CroissantedDto> {
        const croissanted = new CroissantedDto(studentId, croissantedData);
        return this.croissantedService.createCroissanted(croissanted);
    }

    // Get croissanted data -> GET /croissanted/:id or name
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<croissanted> {
        return this.croissantedService.croissanted(String(id));
    }


    // Get croissanted data of student -> GET /croissanted/student/:id or name
    @Get("/:id/student")
    async croissantedStudent(@Param("id") id: string): Promise<croissanted[]> {
        return this.croissantedService.croissantedStudent(String(id));
    }


    // Get all croissanted data
    @Get("/all")
    async getAllCroissanted() {
        return this.croissantedService.getAllCroissanted();
    }

    // Get scoreboard of croissanted data
    @Get("/scoreboard")
    async getScoreboardCroissanted() {
        return this.croissantedService.getScoreboardCroissanted();
    }

    // Update croissanted data -> PUT /croissanted/:id
    @Put("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async updateCroissanted(
        @Body() croissantedData: CroissantedDto,
        @Param("id") id
    ): Promise<CroissantedDto> {
        const croissanted = new CroissantedDtoId(croissantedData, id);
        return this.croissantedService.updateCroissanted(croissanted);
    }

    // Delete croissanted -> DELETE /croissanted/:id
    @Delete("/:id")
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async deleteCroissanted(@Param("id") id): Promise<croissanted> {
        return this.croissantedService.deleteCroissanted(id)
    }

}
