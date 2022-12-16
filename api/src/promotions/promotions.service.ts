import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, promotion} from "@prisma/client";

@Injectable()
export class PromotionsService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async promotion(id, name): Promise<promotion | null> {
        return await this.prisma.promotion.findFirst({
            where: {OR: [{id}, {name}]},
        });
    }

    async promotionStudent(id, name): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {OR: [{id}, {name}]},
            include: {
                student: true
            }
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

    async updatePromotion(data: Prisma.promotionUpdateInput): Promise<promotion> {
        const promotionExists = await this.prisma.promotion.update({
            where: {id: String(data.id)},
            data: {
                ...data
            },
        });
        if (!promotionExists) {
            throw new HttpException("Promotion does not exists", HttpStatus.BAD_REQUEST);
        }
        return promotionExists;
    }

    async deletePromotion(id: Prisma.promotionDeleteArgs): Promise<promotion> {
        const promotionExists = await this.prisma.promotion.delete({
            where: {id: String(id)}
        });
        if (!promotionExists) {
            throw new HttpException("Promotion does not exists", HttpStatus.BAD_REQUEST);
        }
        return promotionExists;
    }


    async getAllPromotion(){
        return await this.prisma.promotion.findMany();
    }

}
