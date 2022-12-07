import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {login} from "@prisma/client";
import {LoginService} from "./login.service";
import {LoginDto, LoginDtoId} from "./login.dto";

@Controller("login")
export class LoginController {
    constructor(private readonly loginService: LoginService) {
    }

    // Create login -> POST /login
    @Post()
    async createLogin(
        @Body() loginData: LoginDto
    ): Promise<LoginDto> {
        return this.loginService.createLogin(loginData);
    }

    // Get login data -> GET /login/:id
    @Get("/:id")
    async profile(@Param("id") id: string): Promise<login> {
        return this.loginService.login(String(id))
    }

    // Get all logins data
    @Get("/all")
    async getAllLogin() {
        return this.loginService.getAllLogin();
    }

    // Update login data -> PUT /login/:id
    @Put("/:id")
    async updateLogin(
        @Body() loginData: LoginDtoId
    ): Promise<LoginDtoId> {
        return this.loginService.updateLogin(loginData);
    }

    // Delete login -> DELETE /login/:id
    @Delete("/:id")
    async deleteLogin(@Param("id") id): Promise<login> {
        return this.loginService.deleteLogin(id)
    }
}