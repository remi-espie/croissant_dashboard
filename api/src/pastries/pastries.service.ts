import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {pastry, Prisma} from "@prisma/client";

@Injectable()
export class PastriesService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async pastry(
        pastryWhereUniqueInput: Prisma.pastryWhereUniqueInput
    ): Promise<pastry | null> {
        return await this.prisma.pastry.findUnique({
            where: pastryWhereUniqueInput,
        });
    }

    async createPastry(data: Prisma.pastryCreateInput): Promise<pastry> {
        const pastryExists = await this.prisma.pastry.findUnique({
            where: {name: data.name},
        });
        if (pastryExists) {
            throw new HttpException("Pastry already exists", HttpStatus.CONFLICT);
        }
        return await this.prisma.pastry.create({
            data: {
                ...data
            },
        });
    }
}