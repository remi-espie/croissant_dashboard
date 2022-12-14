import {
    Body, ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus, NotFoundException,
    Param, Patch,
    Post,
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
    @Get("/:id")
    async student(@Param("id") id: string): Promise<student> {
        let student: student;

        if (isUUID(id)) {
            student = await this.studentsService.student(id)
        } else {
            student = await this.studentsService.studentMail(id)
        }

        if (!student) throw new NotFoundException("Student not found");

        return student;
    }

    // Get all students data
    @Get("/all")
    async getAllStudent() {
        return this.studentsService.getAllStudent();
    }

    // Update student data -> PATCH /student/:id
    @Patch("/:id")
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async updateStudent(@Body() studentData: StudentsDto,
                        @Param("id") id
    ): Promise<StudentsDto> {
        try {
            const student = await this.student(id)
            const studentDataId: StudentsDtoId = new StudentsDtoId(studentData, student.id)
            return this.studentsService.updateStudent(studentDataId);
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }

    // Delete student -> DELETE /student/:id
    @Delete("/:id")
    @UseGuards(JwtAuthGuard, StudentGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    async deleteStudent(@Param("id") id
    ): Promise<student> {
        try {
            if (isUUID(id)) return this.studentsService.deleteStudent(id)
            else return this.studentsService.deleteStudentMail(id)
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }
}
