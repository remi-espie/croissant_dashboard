import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class PromotionDto{
    @IsString()
    @IsNotEmpty()
    public name: string

    @IsNumber()
    @IsNotEmpty()
    public year: number

    @IsString()
    @IsOptional()
    public url_schedule: string

    @IsString()
    @IsOptional()
    public url_picture: string
}

export class PromotionDtoId{
    @IsString()
    @IsNotEmpty()
    public id: string

    @IsString()
    @IsNotEmpty()
    public name: string

    @IsNumber()
    @IsNotEmpty()
    public year: number

    @IsString()
    @IsOptional()
    public url_schedule: string

    @IsString()
    @IsOptional()
    public url_picture: string
}