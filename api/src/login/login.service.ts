import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {login, Prisma} from "@prisma/client";
import {PasswordProvider} from "../provider/password";

@Injectable()
export class LoginService {
    constructor(
        private prisma: PrismaService,
        private passwordProvider: PasswordProvider
    ) {
    }

    async login(id, studentId): Promise<login | null> {
        const login = await this.prisma.login.findFirst({
            where: {OR: [{id}, {studentId}]}
        });
        delete login.password;
        return login;
    }

    async getLogin(id, studentId): Promise<login | null> {
        return await this.prisma.login.findFirst({
            where: {OR: [{id}, {studentId}]}
        });
    }

    async createLogin(data: Prisma.loginUncheckedCreateInput): Promise<login> {

        const passwordHashed = await this.passwordProvider.hashPassword(
            data.password
        );
        const login = await this.prisma.login.create({
            data: {
                ...data,
                password: passwordHashed,
            },
        });

        delete login.password;

        return login;
    }

    async updateLogin(data: Prisma.loginUpdateInput): Promise<login> {
        const loginExists = await this.prisma.login.update({
            where: {id: String(data.id)},
            data: {
                ...data
            },
        });
        if (!loginExists) {
            throw new HttpException("Login does not exists", HttpStatus.BAD_REQUEST);
        }
        return loginExists;
    }

    async deleteLogin(id: Prisma.loginDeleteArgs): Promise<login> {
        const loginExists = await this.prisma.login.delete({
            where: {id: String(id)}
        });
        if (!loginExists) {
            throw new HttpException("Login does not exists", HttpStatus.BAD_REQUEST);
        }
        return loginExists;
    }

    async getAllLogin(){
        return await this.prisma.login.findMany();
    }

}