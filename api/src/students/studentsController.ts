import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {pastry, promotion, student} from "@prisma/client";
import { StudentsService } from "./students.service";

@Controller("student")
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
    // Create student -> POST /student
    @Post()
    async createStudent(
        @Body() studentData: { name: string; firstname: string; birthday: string; mail: string; s_promotion: promotion; fav_pastry: pastry }
    ): Promise<student> {
        return this.studentsService.createUser(studentData);
    }

    // Get student Profile -> GET /student/:id
    @Get("/:id")
    async profile(@Param("id") id: number): Promise<student> {
        return this.studentsService.Student({ id: String(id) });
    }
}