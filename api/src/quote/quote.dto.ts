import {IsNotEmpty, IsString} from 'class-validator';

export class QuoteDto{
    @IsString()
    @IsNotEmpty()
    public quote: string

    @IsString()
    public author: string
}

export class QuoteDtoId extends QuoteDto{
    @IsString()
    @IsNotEmpty()
    public id: string
}
