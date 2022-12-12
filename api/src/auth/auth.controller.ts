import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto} from "../login/login.dto";

@Controller('auth')
export class AuthController {
    constructor(
    private readonly authService: AuthService,
) {}

    @Post('login')
    public async login(@Body() loginDto: LoginDto):
        Promise<any> {
        return await this.authService.login(loginDto);
    }

}
