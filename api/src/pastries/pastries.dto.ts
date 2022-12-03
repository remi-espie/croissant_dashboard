import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class PastriesDto{
    @IsString()
    @IsNotEmpty()
    public name: string

    @IsNumber()
    @IsNotEmpty()
    public price: number
}

export class PastriesDtoId{
    @IsString()
    @IsNotEmpty()
    public id: string

    @IsString()
    @IsNotEmpty()
    public name: string

    @IsNumber()
    @IsNotEmpty()
    public price: number
}