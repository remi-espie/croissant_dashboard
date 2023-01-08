import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete, Get,
    Param,
    Patch, Req,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {login} from "@prisma/client";
import {LoginService} from "./login.service";
import {LoginDto, LoginDtoId} from "./login.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {StudentGuard} from "../auth/student-guard";
import {PasswordProvider} from "../provider/password";

@Controller("login")
export class LoginController {
    constructor(private readonly loginService: LoginService, private readonly passwordProvider: PasswordProvider) {
    }

    // Get login data -> GET /login/:id
    @Get()
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async profile(@Req() request): Promise<login> {
        return request.user;
    }

    // Update login data -> PATCH /login/:id
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Patch("/:id")
    async updateLogin(
        @Body() loginData: LoginDto,
        @Param("id") id
    ): Promise<LoginDto> {
        loginData.password = await this.passwordProvider.hashPassword(loginData.password)
        const login = new LoginDtoId(loginData, id);
        return this.loginService.updateLogin(login);
    }

    // Delete login -> DELETE /login/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteLogin(@Param("id") id): Promise<login> {
        return this.loginService.deleteLogin(id)
    }
}
