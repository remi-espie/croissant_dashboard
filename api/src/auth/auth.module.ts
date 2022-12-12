import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {PrismaService} from "../prisma.service";
import {JwtStrategy} from "./jwt.strategy";
import {LoginService} from "../login/login.service";
import {PassportModule} from "@nestjs/passport";
import {PasswordProvider} from "../provider/password";

@Module({
  imports:[
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  providers: [AuthService, LoginService, JwtStrategy, PrismaService, PassportModule, PasswordProvider],
  controllers: [AuthController],
  exports: [
    PassportModule,
    JwtModule
  ],
})
export class AuthModule {}
