import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma, student} from "@prisma/client";

@Injectable()
export class StudentsService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    async student(id, name): Promise<student | null> {
        return await this.prisma.student.findFirst({
            where: {OR: [{id}, {name}]},
        });
    }

    async createStudent(data: Prisma.studentCreateInput): Promise<student> {
        try {
            return await this.prisma.student.create({
                data: {
                    ...data
                },
            });
        }catch (e){
            throw new HttpException("Invalid parameters for student : " + Object.values(e.meta)[0], HttpStatus.BAD_REQUEST)
        }
    }

    async updateStudent(data: Prisma.studentUncheckedUpdateInput): Promise<student> {
        try {
            return await this.prisma.student.update({
                where: {id: String(data.id)},
                data: {
                    ...data
                },
            });
        } catch (e) {
            console.dir(e)
            throw new HttpException("Invalid parameters for student : " + Object.values(e.meta)[0], HttpStatus.BAD_REQUEST);
        }

    }

    async deleteStudent(id: Prisma.studentDeleteArgs): Promise<student> {
        const studentExists = await this.prisma.student.delete({
            where: {id: String(id)}
        });
        if (!studentExists) {
            throw new HttpException("Student does not exists", HttpStatus.BAD_REQUEST);
        }
        return studentExists;
    }

    async getAllStudent() {
        return await this.prisma.student.findMany();
    }

}
