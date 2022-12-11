import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { StudentsController } from "./studentsController";
import { StudentsService } from "./students.service";
import {LoginService} from "../login/login.service";
import {PasswordProvider} from "../provider/password";

@Module({
    providers: [StudentsService, PrismaService, LoginService, PasswordProvider],
    exports: [StudentsService],
    controllers: [StudentsController],
})
export class StudentsModule {}