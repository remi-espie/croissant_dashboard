import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {pastry, Prisma} from "@prisma/client";

@Injectable()
export class PastriesService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async pastry(id, name): Promise<pastry | null> {
        return await this.prisma.pastry.findFirst({
            where: {OR: [{id}, {name}]},
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

    async updatePastry(data: Prisma.pastryUpdateInput): Promise<pastry> {
        const pastryExists = await this.prisma.pastry.update({
            where: {id: String(data.id)},
            data: {
                ...data
            },
        });
        if (!pastryExists) {
            throw new HttpException("Pastry does not exists", HttpStatus.BAD_REQUEST);
        }
        return pastryExists;
    }

    async deletePastry(id: Prisma.pastryDeleteArgs): Promise<pastry> {
        const pastryExists = await this.prisma.pastry.delete({
            where: {id: String(id)}
        });
        if (!pastryExists) {
            throw new HttpException("Pastry does not exists", HttpStatus.BAD_REQUEST);
        }
        return pastryExists;
    }

    async getAllPastry(){
        return await this.prisma.pastry.findMany();
    }

}