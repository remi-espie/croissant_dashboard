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
    constructor(pastryData: PastriesDto, id) {
        super();
        this.name = pastryData.name;
        this.price = pastryData.price;
        this.id = id;
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
