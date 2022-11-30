import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {pastry, promotion, student} from "@prisma/client";
import { StudentsService } from "./students.service";

@Controller("student")
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
    // Create student -> POST /student
    @Post()
    async createStudent(
        @Body() studentData: { name: string; firstname: string; birthday: string; mail: string; promotion: promotion; pastry: pastry }
    ): Promise<student> {
        return this.studentsService.createStudent(studentData);
    }

    // Get student Profile -> GET /student/:id
    @Get("/:id")
    async profile(@Param("id") id: number): Promise<student> {
        return this.studentsService.student({ id: String(id) });
    }
}