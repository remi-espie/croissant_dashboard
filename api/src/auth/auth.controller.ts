import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDtoId} from "../login/login.dto";

@Controller('auth')
export class AuthController {
    constructor(
    private readonly authService: AuthService,
) {}

    @Post('login')
    public async login(@Body() loginDtoId: LoginDtoId):
        Promise<any> {
        return await this.authService.login(loginDtoId);
    }

}
