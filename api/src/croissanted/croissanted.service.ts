import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {croissanted, Prisma} from "@prisma/client";

@Injectable()
export class CroissantedService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async croissanted(id): Promise<croissanted | null> {
        return await this.prisma.croissanted.findFirst({
            where: {id},
        });
    }

    async croissantedStudent(studentId): Promise<croissanted[] | null> {
        return await this.prisma.croissanted.findMany({
            where: {studentId},
        });
    }

    async createCroissanted(data: Prisma.croissantedUncheckedCreateInput): Promise<croissanted> {
        return await this.prisma.croissanted.create({
            data: {
                ...data
            },
        });
    }

    async updateCroissanted(data: Prisma.croissantedUpdateInput): Promise<croissanted> {
        const croissantedExists = await this.prisma.croissanted.update({
            where: {id: String(data.id)},
            data: {
                ...data
            },
        });
        if (!croissantedExists) {
            throw new HttpException("Croissanted does not exists", HttpStatus.BAD_REQUEST);
        }
        return croissantedExists;
    }

    async deleteCroissanted(id: Prisma.croissantedDeleteArgs): Promise<croissanted> {
        const croissantedExists = await this.prisma.croissanted.delete({
            where: {id: String(id)}
        });
        if (!croissantedExists) {
            throw new HttpException("Croissanted does not exists", HttpStatus.BAD_REQUEST);
        }
        return croissantedExists;
    }

    async getAllCroissanted(){
        return await this.prisma.croissanted.findMany();
    }

    async getScoreboardCroissanted(){
        return await (await this.prisma.croissanted.groupBy({
            by: ['studentId'],
            _count: {
                studentId: true
            },
            orderBy: {
                _count: {
                    studentId: "desc"
                }
            },
        })).map(async (d) => {
            const student = await this.prisma.student.findFirst({where: {id: d.studentId}})
            return {...d, student}
        });
    }

}
