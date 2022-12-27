import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, promotion} from "@prisma/client";

@Injectable()
export class PromotionsService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async promotionId(id): Promise<promotion | null> {
        return await this.prisma.promotion.findFirst({
            where: {id},
        });
    }

    async promotionName(name): Promise<promotion | null> {
        return await this.prisma.promotion.findFirst({
            where: {name},
        });
    }

    async promotionStudentId(id): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {id},
            include: {
                student: true
            }
        });
    }

    async promotionStudentName(name): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {name},
            include: {
                student: true
            }
        });
    }

    async promotionCroissantedId(id): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {id},
            include: {
                student: {
                    include: {
                        croissanted: {
                            where: {bought: false}
                        }
                    }
                }
            }
        });
    }

    async promotionCroissantedName(name): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {name},
            include: {
                student: {
                    include: {
                        croissanted: {
                            where: {bought: false}
                        }
                    }
                }
            }
        });
    }

    async promotionCroissantedAllId(id): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {id},
            include: {
                student: {
                    include: {
                        croissanted: true
                    }
                }
            }
        });
    }

    async promotionCroissantedAllName(name): Promise<promotion[] | null> {
        return await this.prisma.promotion.findMany({
            where: {name},
            include: {
                student: {
                    include: {
                        croissanted: true
                    }
                }
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
