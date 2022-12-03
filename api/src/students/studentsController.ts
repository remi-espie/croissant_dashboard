import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {pastry, student, promotion} from "@prisma/client";
import {StudentsService} from "./students.service";

@Controller("student")
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {
    }

    // Create student -> POST /student
    @Post()
    async createStudent(
        @Body() studentData: { name: string; firstname: string; birthday: string; mail: string; promotion: promotion; pastry: pastry }
    ): Promise<student> {
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
        @Body() studentData: { name: string; firstname: string; birthday: string; mail: string; promotion: promotion; pastry: pastry }
    ): Promise<student> {
        return this.studentsService.updateStudent(studentData);
    }

    // Delete student -> DELETE /student/:id
    @Delete("/:id")
    async deleteStudent(@Param("id") id): Promise<student> {
        return this.studentsService.deleteStudent(id)
    }
}