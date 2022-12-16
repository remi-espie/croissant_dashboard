import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class PromotionsDto {
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

export class PromotionDtoId extends PromotionsDto{
    constructor(promotion: PromotionsDto, id) {
        super();
        this.name = promotion.name
        this.year = promotion.year
        this.url_schedule = promotion.url_schedule
        this.url_picture = promotion.url_picture
        this.id = id;
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
