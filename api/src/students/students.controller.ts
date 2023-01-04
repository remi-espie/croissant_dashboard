import {
    Body, ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param, Patch,
    Post, Req,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {student} from "@prisma/client";
import {StudentsService} from "./students.service";
import {StudentsDto, StudentsDtoId} from "./students.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {StudentGuard} from "../auth/student-guard";
import {isUUID} from "class-validator";

@Controller("student")
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {
    }

    // Create student -> POST /student
    @Post()
    async createStudent(
        @Body() studentData: StudentsDto
    ): Promise<StudentsDto> {
        studentData.birthday = new Date(studentData.birthday)
        return this.studentsService.createStudent(studentData);
    }

    // Get student data -> GET /student/:id or name
    @Get()
    async studentCookie(@Req() request): Promise<student> {
        return request.user;
    }

    // Get student data -> GET /student/:id or name
    @Get("/:id")
    async student(@Param("id") id: string): Promise<student> {
        if (isUUID(id)) {
            return this.studentsService.student(id)
        } else {
            return this.studentsService.studentMail(id)
        }
    }

    // Get all students data
    @Get("/all")
    async getAllStudent() {
        return this.studentsService.getAllStudent();
    }

    // Update student data -> PUT /student/:id
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Patch("/:id")
    async updateStudent(@Body() studentData: StudentsDto,
                        @Param("id") id
    ): Promise<StudentsDto> {
        try {
            const student = new StudentsDtoId(studentData, id);
            return this.studentsService.updateStudent(student);
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }

    // Delete student -> DELETE /student/:id
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteStudent(@Param("id") id
    ): Promise<student> {
        try {
            return this.studentsService.deleteStudent(id)
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }
}
