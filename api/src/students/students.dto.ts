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

export class StudentsDtoId extends StudentsDto{
    constructor(id, student: StudentsDto) {
        super();
        this.id = id
        this.name = student.name
        this.firstname = student.firstname
        this.mail = student.mail
        this.birthday = student.birthday
        this.pastryId = student.pastryId
        this.promotionId = student.promotionId
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
