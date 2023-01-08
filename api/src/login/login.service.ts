import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {login, Prisma} from "@prisma/client";
import {PasswordProvider} from "../provider/password";
import {LoginDto} from "./login.dto";

@Injectable()
export class LoginService {
    constructor(
        private prisma: PrismaService,
        private passwordProvider: PasswordProvider
    ) {
    }

    async getLoginId(id): Promise<login | null> {
        const user = await this.prisma.login.findFirst({
            where: {id}
        });
        if (!user) throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
        delete user.password;
        return user;
    }

    async getLoginMail(login): Promise<login | null> {
        const user = await this.prisma.login.findFirst({
            where: {login}
        });
        if (!user) throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
        delete user.password;
        return user;
    }

    async login(loginDto: LoginDto): Promise<login | null> {
        const login = loginDto.login
        const loginStudent = await this.prisma.login.findFirst({
            where: {login}
        });
        if (!loginStudent) throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
        if (await this.passwordProvider.comparePassword(loginDto.password, loginStudent.password)) {
            delete loginStudent.password;
            return loginStudent;
        } else throw new HttpException("Invalid credential", HttpStatus.UNAUTHORIZED)
    }

    async getLogin(id, login): Promise<login | null> {
        const user = await this.prisma.login.findFirst({
            where: {OR: [{id}, {login}]}
        });
        if (!user) throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
        delete user.password;
        return user;
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
        try {
            data.password = await this.passwordProvider.hashPassword(
                String(data.password)
            );
            const loginExists = await this.prisma.login.update({
                where: {id: String(data.id)},
                data: {
                    ...data
                },
            });
            if (!loginExists) {
                throw new HttpException("Login does not exists", HttpStatus.BAD_REQUEST);
            }
            delete loginExists.password
            return loginExists;
        } catch (e) {
            throw new HttpException("Invalid provided informations", HttpStatus.BAD_REQUEST);
        }
    }

    async deleteLogin(id: Prisma.loginDeleteArgs): Promise<login> {
        try {
            const login = await this.prisma.login.delete({
                where: {id: String(id)}
            });
            delete login.password
            return login;
        } catch (e) {
            throw new HttpException("Login does not exists", HttpStatus.BAD_REQUEST)
        }
    }

}
