import {IsNotEmpty, IsString} from 'class-validator';

export class QuoteDto{
    @IsString()
    @IsNotEmpty()
    public quote: string

    @IsString()
    public author: string
}

export class QuoteDtoId{
    @IsString()
    @IsNotEmpty()
    public id: string

    @IsString()
    @IsNotEmpty()
    public quote: string

    @IsString()
    public author: string

}