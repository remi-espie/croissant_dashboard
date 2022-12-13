import {IsBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class LoginDto{
    @IsString()
    @IsNotEmpty()
    login: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsBoolean()
    @IsOptional()
    admin: boolean
}

export class LoginDtoId extends LoginDto{
    @IsString()
    @IsNotEmpty()
    public id: string
}
