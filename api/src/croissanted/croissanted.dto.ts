import {IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CroissantedDto{
    constructor(studentId: string, croissantedDto) {
        this.studentId = studentId;
        this.bought = croissantedDto.bought;
        this.date = croissantedDto.date;
    }

    @IsDateString()
    @IsOptional()
    public date: Date

    @IsString()
    @IsNotEmpty()
    public studentId: string

    @IsBoolean()
    @IsOptional()
    public bought: boolean
}

export class CroissantedDtoId extends CroissantedDto{
    constructor(croissanted: CroissantedDto, id) {
        super(croissanted.studentId, CroissantedDto);
        this.id = id
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
