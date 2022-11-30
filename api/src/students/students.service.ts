import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, student} from "@prisma/client";

@Injectable()
export class StudentsService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async student(
        studentWhereUniqueInput: Prisma.studentWhereUniqueInput
    ): Promise<student | null> {
        return await this.prisma.student.findUnique({
            where: studentWhereUniqueInput,
        });
    }

    async createStudent(data: Prisma.studentCreateInput): Promise<student> {
        const studentExists = await this.prisma.student.findUnique({
            where: {mail: data.mail},
        });
        if (studentExists) {
            throw new HttpException("Student already exists", HttpStatus.CONFLICT);
        }
        return await this.prisma.student.create({
            data: {
                ...data
            },
        });
    }
}