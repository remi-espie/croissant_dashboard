import {IsDate, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class StudentsDto{
    @IsString()
    @IsNotEmpty()
    public name: string

    @IsString()
    @IsNotEmpty()
    public firstname: string

    @IsDate()
    @IsOptional()
    public birthday: Date

    @IsString()
    @IsNotEmpty()
    public mail: string

    @IsNotEmpty()
    public promotionId: string

    @IsNotEmpty()
    public pastryId: string
}

export class StudentsDtoId{
    @IsString()
    @IsNotEmpty()
    public id: string

    @IsString()
    @IsNotEmpty()
    public name: string

    @IsString()
    @IsNotEmpty()
    public firstname: string

    @IsDate()
    @IsOptional()
    public birthday: Date

    @IsString()
    @IsNotEmpty()
    public mail: string

    @IsNotEmpty()
    public promotionId: string

    @IsNotEmpty()
    public pastryId: string

}