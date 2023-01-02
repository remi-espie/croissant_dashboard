import {HttpException, HttpStatus, Injectable, StreamableFile} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, promotion} from "@prisma/client";
import {join} from 'path';
import * as fs from "fs";
import fetch from "node-fetch";

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

        const regex = new RegExp('^https:\\/\\/proseconsult\\.umontpellier\\.fr\\/jsp\\/custom\\/modules\\/plannings\\/direct_cal\\.jsp\\?data=');
        if (!regex.test(data.url_schedule)) {
            throw new HttpException("URL is not valid", HttpStatus.BAD_REQUEST);
        }

        const promo = await this.prisma.promotion.create({
            data: {
                ...data
            },
        });

        const res = await fetch(data.url_schedule);
        const fileStream = fs.createWriteStream(promo.id + ".ics");
        await new Promise((resolve, reject) => {
            res.body.pipe(fileStream);
            res.body.on("error", reject);
            fileStream.on("finish", resolve);
        });

        return promo;
    }

    async scheduleName(answer, name): Promise<StreamableFile | null> {
        const promo = await this.prisma.promotion.findFirst({
            where: {name},
        });

        return this.getSchedule(answer, promo);
    }

    async schedule(answer, id): Promise<StreamableFile | null> {
        const promo = await this.prisma.promotion.findFirst({
            where: {id},
        });

        return this.getSchedule(answer, promo);
    }

    async getSchedule(answer, promo: promotion): Promise<StreamableFile> {
        if (!promo) {
            throw new HttpException("Promotion does not exists", HttpStatus.BAD_REQUEST);
        }

        if (await this.validateSchedule(promo)) {

            const file = fs.createReadStream(join(process.cwd(), promo.id + ".ics"));
            answer.headers({
                'Content-Type': 'text/calendar',
                'Content-Disposition': 'attachment; filename="' + promo.id + '.ics"',
            });
            return new StreamableFile(file);
        }
    }

    async validateSchedule(promo: promotion): Promise<boolean> {
        const regex = new RegExp('^https:\\/\\/proseconsult\\.umontpellier\\.fr\\/jsp\\/custom\\/modules\\/plannings\\/direct_cal\\.jsp\\?data=');
        if (!regex.test(String(promo.url_schedule))) {
            throw new HttpException("URL is not valid", HttpStatus.BAD_REQUEST);
        }

        const res = await fetch(promo.url_schedule);
        const fileStream = fs.createWriteStream(promo.id + ".ics");
        await new Promise((resolve, reject) => {
            res.body.pipe(fileStream);
            res.body.on("error", reject);
            fileStream.on("finish", resolve);
        });
        return true;
    }

    async updatePromotion(data: Prisma.promotionUpdateInput): Promise<promotion> {
        const promo = await this.prisma.promotion.findFirst({
            where: {id: String(data.id)},
        });
        if (await this.validateSchedule(promo)) {

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


    async getAllPromotion() {
        return await this.prisma.promotion.findMany();
    }

}
