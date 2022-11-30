import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { StudentsController } from "./studentsController";
import { StudentsService } from "./students.service";

@Module({
    providers: [StudentsService, PrismaService],
    exports: [StudentsService],
    controllers: [StudentsController],
})
export class StudentsModule {}