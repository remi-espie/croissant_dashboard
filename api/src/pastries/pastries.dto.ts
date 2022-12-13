import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class PastriesDto{
    @IsString()
    @IsNotEmpty()
    public name: string

    @IsNumber()
    @IsNotEmpty()
    public price: number
}

export class PastriesDtoId extends PastriesDto{
    @IsString()
    @IsNotEmpty()
    public id: string
}
