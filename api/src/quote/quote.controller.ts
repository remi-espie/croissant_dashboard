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

    // Get random quote's data
    @Get("/random")
    async getRandomQuote() {
        return this.quoteService.getRandomQuote();
    }

    // Update quote data -> PATCH /quote/:id
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Patch("/:id")
    async updateQuote(
        @Body() quoteData: QuoteDto,
        @Param("id") id
    ): Promise<QuoteDto> {
        const quote = new QuoteDtoId(quoteData, id);
        return this.quoteService.updateQuote(quote);
    }

    // Delete quote -> DELETE /quote/:id
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteQuote(@Param("id") id): Promise<quote> {
        return this.quoteService.deleteQuote(id)
    }
}
