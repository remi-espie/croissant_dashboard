import {IsDateString, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class StudentsDto{
    @IsString()
    @IsNotEmpty()
    public name: string

    @IsString()
    @IsNotEmpty()
    public firstname: string

    @IsDateString()
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

export class StudentsDtoPassword{

    @IsString()
    @IsNotEmpty()
    public id: string

    @IsString()
    @IsNotEmpty()
    public name: string

    @IsString()
    @IsNotEmpty()
    public firstname: string

    @IsDateString()
    @IsOptional()
    public birthday: Date

    @IsString()
    @IsNotEmpty()
    public mail: string

    @IsNotEmpty()
    public promotionId: string

    @IsNotEmpty()
    public pastryId: string

    @IsNotEmpty()
    @IsString()
    public password: string
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

    @IsDateString()
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