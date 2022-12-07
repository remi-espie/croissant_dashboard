import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {quote} from "@prisma/client";
import {QuoteService} from "./quote.service";
import {QuoteDto, QuoteDtoId} from "./quote.dto";

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
    @Put("/:id")
    async updateQuote(
        @Body() quoteData: QuoteDtoId
    ): Promise<QuoteDtoId> {
        return this.quoteService.updateQuote(quoteData);
    }

    // Delete quote -> DELETE /quote/:id
    @Delete("/:id")
    async deleteQuote(@Param("id") id): Promise<quote> {
        return this.quoteService.deleteQuote(id)
    }
}