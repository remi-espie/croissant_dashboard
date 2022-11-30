import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, promotion} from "@prisma/client";

@Injectable()
export class PromotionsService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async promotion(
        promotionWhereUniqueInput: Prisma.promotionWhereUniqueInput
    ): Promise<promotion | null> {
        return await this.prisma.promotion.findUnique({
            where: promotionWhereUniqueInput,
        });
    }

    async createPromotion(data: Prisma.promotionCreateInput): Promise<promotion> {
        const promotionExists = await this.prisma.promotion.findUnique({
            where: {name: data.name}
        });
        if (promotionExists) {
            throw new HttpException("Promotion already exists", HttpStatus.CONFLICT);
        }
        return await this.prisma.promotion.create({
            data: {
                ...data
            },
        });
    }
}