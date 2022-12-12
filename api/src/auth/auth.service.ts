import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {JwtService} from "@nestjs/jwt";
import {LoginService} from "../login/login.service";
import {JwtPayload} from "./jwt.strategy";
import {LoginDtoId} from "../login/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly loginService: LoginService,
    ) {}


    async login(loginDto: LoginDtoId): Promise<any> {
        const user = await this.loginService.loginId(loginDto.id);

        // generate and sign token
        const token = this._createToken(user);

        return {
            ...token,
            data: user
        };
    }

    private _createToken({ login }): any {
        const loginPayload: JwtPayload = { login };
        const Authorization = this.jwtService.sign(loginPayload);
        return {
            expiresIn: process.env.EXPIRESIN,
            Authorization,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.loginService.loginId(payload);
        if (!user) {
            throw new HttpException("INVALID_TOKEN",
                HttpStatus.UNAUTHORIZED);
        }
        return user;
    }

    async validateAdmin(payload: JwtPayload): Promise<any> {
        const user = await this.validateUser(payload)
        if (user.admin) return user;
        else throw new HttpException("INVALID_TOKEN", HttpStatus.UNAUTHORIZED);
    }
}
