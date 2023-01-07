import {IsBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class LoginDto{
    @IsString()
    @IsNotEmpty()
    login: string

    @IsString()
    @IsNotEmpty()
    password: string

}

export class LoginDtoId extends LoginDto{
    constructor(login: LoginDto, id) {
        super();
        this.login = login.login;
        this.password = login.password;
        this.admin = false;
        this.id = id;
    }

    @IsString()
    @IsNotEmpty()
    public id: string


    @IsBoolean()
    @IsOptional()
    admin: boolean
}
