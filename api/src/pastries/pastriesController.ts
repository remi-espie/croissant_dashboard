import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {pastry} from "@prisma/client";
import { PastriesService } from "./pastries.service";

@Controller("pastry")
export class PastriesController {
    constructor(private readonly pastryService: PastriesService) {}
    // Create pastry -> POST /pastry
    @Post()
    async createPromotion(
        @Body() pastryData: { name: string; price: number; }
    ): Promise<pastry> {
        return this.pastryService.createPastry(pastryData);
    }

    // Get pastry data -> GET /pastry/:id or name
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<pastry> {
        return this.pastryService.Pastry({ id: String(id) });
    }

}