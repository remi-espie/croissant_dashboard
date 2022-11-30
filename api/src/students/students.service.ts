import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, student} from "@prisma/client";

@Injectable()
export class StudentsService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async Student(
        studentWhereUniqueInput: Prisma.studentWhereUniqueInput
    ): Promise<student | null> {
        return await this.prisma.student.findUnique({
            where: studentWhereUniqueInput,
        });
    }

    async createUser(data: Prisma.studentCreateInput): Promise<student> {
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