import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put, UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {quote} from "@prisma/client";
import {QuoteService} from "./quote.service";
import {QuoteDto, QuoteDtoId} from "./quote.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AdminGuard} from "../auth/admin-guard";

@Controller("quote")
export class QuoteController {
    constructor(private readonly quoteService: QuoteService) {
    }

    // Create quote -> POST /quote
    @Post()
    async createQuote(
        @Body() quoteData: QuoteDto
    ): Promise<QuoteDto> {
        return this.quoteService.createQuote(quoteData);
    }

    // Get quote data -> GET /quote/:id
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<quote> {
        return this.quoteService.quote(String(id))
    }

    // Get all quotes data
    @Get("/all")
    async getAllQuote() {
        return this.quoteService.getAllQuote();
    }

    // Update quote data -> PUT /quote/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Put("/:id")
    async updateQuote(
        @Body() quoteData: QuoteDtoId
    ): Promise<QuoteDtoId> {
        return this.quoteService.updateQuote(quoteData);
    }

    // Delete quote -> DELETE /quote/:id
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteQuote(@Param("id") id): Promise<quote> {
        return this.quoteService.deleteQuote(id)
    }
}
