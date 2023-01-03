import {IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CroissantedDto{
    constructor(studentId: string) {
        this.studentId = studentId;
    }

    @IsDateString()
    @IsOptional()
    public date: Date

    @IsString()
    @IsOptional()
    public studentId: string

    @IsBoolean()
    @IsOptional()
    public bought: boolean
}

export class CroissantedDtoId extends CroissantedDto{
    constructor(croissanted: CroissantedDto, id) {
        super(croissanted.studentId);
        this.bought = croissanted.bought;
        this.date = croissanted.date;
        this.id = id;
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
