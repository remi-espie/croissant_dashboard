import {IsNotEmpty, IsString} from 'class-validator';

export class QuoteDto{
    @IsString()
    @IsNotEmpty()
    public quote: string

    @IsString()
    public author: string
}

export class QuoteDtoId extends QuoteDto{
    constructor(quote: QuoteDto, id) {
        super();
        this.quote = quote.quote
        this.author = quote.author
        this.id = id
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
