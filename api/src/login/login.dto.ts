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

    @IsString()
    @IsOptional()
    studentId: string
}

export class LoginDtoId{
    @IsString()
    @IsNotEmpty()
    public id: string

    @IsString()
    @IsNotEmpty()
    login: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsBoolean()
    @IsOptional()
    admin: boolean

    @IsString()
    @IsNotEmpty()
    studentId: string
}
