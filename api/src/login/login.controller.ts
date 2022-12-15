import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Param,
    Put,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {login} from "@prisma/client";
import {LoginService} from "./login.service";
import {LoginDtoId} from "./login.dto";
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
    // // Get login data -> GET /login/:id
    // @Get("/:id")
    // async profile(@Param("id") id: string): Promise<login> {
    //     return this.loginService.getLogin(String(id), String(id))
    // }
    //
    // // Get all logins data
    // @Get("/all")
    // async getAllLogin() {
    //     return this.loginService.getAllLogin();
    // }

    // Update login data -> PUT /login/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Put("/:id")
    async updateLogin(
        @Body() loginData: LoginDtoId
    ): Promise<LoginDtoId> {
        return this.loginService.updateLogin(loginData);
    }

    // Delete login -> DELETE /login/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteLogin(@Param("id") id): Promise<login> {
        return this.loginService.deleteLogin(id)
    }
}
