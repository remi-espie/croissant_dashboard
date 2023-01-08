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

@Controller("login")
export class LoginController {
    constructor(private readonly loginService: LoginService) {
    }

    // // Create login -> POST /login
    // @Post()
    // async createLogin(
    //     @Body() loginData: LoginDto
    // ): Promise<LoginDto> {
    //     return this.loginService.createLogin(loginData);
    // }
    //
    // Get login data -> GET /login/:id
    @Get()
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async profile(@Req() request): Promise<login> {
        return request.user;
    }
    //
    // // Get all logins data
    // @Get("/all")
    // async getAllLogin() {
    //     return this.loginService.getAllLogin();
    // }

    // Update login data -> PATCH /login/:id
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Patch("/:mail")
    async updateLogin(
        @Body() loginData: LoginDto,
        @Param("mail") mail
    ): Promise<LoginDto> {
        const login = await this.loginService.getLoginMail(mail);
        const loginDto = new LoginDtoId(loginData, login.id)
        return this.loginService.updateLogin(loginDto);
    }

    // Delete login -> DELETE /login/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteLogin(@Param("id") id): Promise<login> {
        return this.loginService.deleteLogin(id)
    }
}
