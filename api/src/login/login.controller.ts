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

    // Update login data -> PUT /login/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Patch("/:id")
    async updateLogin(
        @Body() loginData: LoginDto,
        @Param("id") id
    ): Promise<LoginDto> {
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
