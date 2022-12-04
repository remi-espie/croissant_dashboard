import {IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CroissantedDto{
    @IsDateString()
    @IsOptional()
    public date: Date

    @IsString()
    @IsNotEmpty()
    public studentId: string

    @IsBoolean()
    @IsOptional()
    public bought: boolean
}

export class CroissantedDtoId{
    @IsString()
    @IsNotEmpty()
    public id: string

    @IsDateString()
    @IsOptional()
    public date: Date

    @IsString()
    @IsNotEmpty()
    public studentId: string

    @IsBoolean()
    @IsOptional()
    public bought: boolean
}