import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {JwtService} from "@nestjs/jwt";
import {LoginService} from "../login/login.service";
import {JwtPayload} from "./jwt.strategy";
import {LoginDto} from "../login/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly loginService: LoginService,
    ) {}

    async login(loginDto: LoginDto): Promise<any> {
        const user = await this.loginService.login(loginDto);
        if (!user) throw new HttpException("invalid_credentials", HttpStatus.UNAUTHORIZED);

        // generate and sign token
        const token = this._createToken(user);
        return {
            ...token,
            data: user
        };
    }

    private _createToken({ id }): any {
        const loginPayload: JwtPayload = { id };
        const Authorization = this.jwtService.sign(loginPayload);
        return {
            expiresIn: process.env.EXPIRESIN,
            Authorization,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.loginService.getLoginId(payload.id);
        if (!user) {
            throw new HttpException("INVALID_TOKEN",
                HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}
