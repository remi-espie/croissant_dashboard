import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, quote} from "@prisma/client";

@Injectable()
export class QuoteService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async quote(id): Promise<quote | null> {
        return await this.prisma.quote.findFirst({
            where: {id},
        });
    }

    async createQuote(data: Prisma.quoteCreateInput): Promise<quote> {
        return await this.prisma.quote.create({
            data: {
                ...data
            },
        });
    }

    async updateQuote(data: Prisma.quoteUpdateInput): Promise<quote> {
        const quoteExists = await this.prisma.quote.update({
            where: {id: String(data.id)},
            data: {
                ...data
            },
        });
        if (!quoteExists) {
            throw new HttpException("Quote does not exists", HttpStatus.BAD_REQUEST);
        }
        return quoteExists;
    }

    async deleteQuote(id: Prisma.quoteDeleteArgs): Promise<quote> {
        const quoteExists = await this.prisma.quote.delete({
            where: {id: String(id)}
        });
        if (!quoteExists) {
            throw new HttpException("Quote does not exists", HttpStatus.BAD_REQUEST);
        }
        return quoteExists;
    }

    async getAllQuote(){
        return await this.prisma.quote.findMany();
    }

}