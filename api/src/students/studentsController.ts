import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {student} from "@prisma/client";
import {StudentsService} from "./students.service";
import {StudentsDto, StudentsDtoId} from "./students.dto";

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
    async profile(@Param("id") id: string): Promise<student> {
        return this.studentsService.student(String(id), String(id))
    }

    // Get all students data
    @Get("/all")
    async getAllStudent() {
        return this.studentsService.getAllStudent();
    }

    // Update student data -> PUT /student/:id
    @Put("/:id")
    async updateStudent(
        @Body() studentData: StudentsDtoId
    ): Promise<StudentsDtoId> {
        studentData.birthday = new Date(studentData.birthday)
        return this.studentsService.updateStudent(studentData);
    }

    // Delete student -> DELETE /student/:id
    @Delete("/:id")
    async deleteStudent(@Param("id") id): Promise<student> {
        return this.studentsService.deleteStudent(id)
    }
}