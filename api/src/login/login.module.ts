import { Module } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {LoginController} from "./login.controller";
import {LoginService} from "./login.service";
import {PasswordProvider} from "../provider/password";

@Module({
    providers: [LoginService, PrismaService, PasswordProvider],
    exports: [LoginService],
    controllers: [LoginController]
})
export class LoginModule {}
