import {
    Body, ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {student} from "@prisma/client";
import {StudentsService} from "./students.service";
import {StudentsDto, StudentsDtoId, StudentsDtoPassword} from "./students.dto";
import {LoginService} from "../login/login.service";
import {PasswordProvider} from "../provider/password";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller("student")
export class StudentsController {
    constructor(private readonly studentsService: StudentsService, private readonly loginService: LoginService, private readonly passwordProvider: PasswordProvider) {
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
        return this.studentsService.student(String(id), String(id))
    }

    // Get all students data
    @Get("/all")
    async getAllStudent() {
        return this.studentsService.getAllStudent();
    }

    // Update student data -> PUT /student/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Put("/:id")
    async updateStudent(
        @Body() studentData: StudentsDtoId
    ): Promise<StudentsDtoId> {
        try {
            const login = await this.loginService.getLogin(studentData.id, studentData.id);
            if (!login) throw new HttpException("Invalid credential", HttpStatus.FORBIDDEN);
            return this.studentsService.updateStudent(studentData);
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }

    // Delete student -> DELETE /student/:id
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete("/:id")
    async deleteStudent(@Body() password: string, @Param("id") id): Promise<student> {
        try {
            return this.studentsService.deleteStudent(id)
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }
}
