import {IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CroissantedDto{
    constructor(studentId: string, croissantedData: CroissantedDto) {
        this.studentId = studentId;
        this.bought = croissantedData.bought;
        this.date = croissantedData.date;
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
        super(croissanted.studentId, croissanted);
        this.id = id
    }

    @IsString()
    @IsNotEmpty()
    public id: string
}
