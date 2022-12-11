import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {student} from "@prisma/client";
import {StudentsService} from "./students.service";
import {StudentsDto, StudentsDtoId, StudentsDtoPassword} from "./students.dto";
import {LoginService} from "../login/login.service";
import {PasswordProvider} from "../provider/password";

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
    @Put("/:id")
    async updateStudent(
        @Body() studentData: StudentsDtoPassword
    ): Promise<StudentsDtoId> {
        try {
            const login = await this.loginService.getLogin(studentData.id, studentData.id);
            if (await this.passwordProvider.comparePassword(studentData.password, login.password)) {
                const student = new StudentsDtoId();
                student.id = studentData.id
                student.name = studentData.name
                student.firstname = studentData.firstname
                student.birthday = new Date(studentData.birthday);
                student.mail = studentData.mail
                student.pastryId = studentData.pastryId
                student.promotionId = studentData.promotionId
                return this.studentsService.updateStudent(student);
            } else throw new HttpException("Bad credential", HttpStatus.FORBIDDEN);
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }

    // Delete student -> DELETE /student/:id
    @Delete("/:id")
    async deleteStudent(@Body() password: string, @Param("id") id): Promise<student> {
        try {
            const student = await this.loginService.getLogin(id, id);
            if (await this.passwordProvider.comparePassword(password, student.password)) {
                return this.studentsService.deleteStudent(id)
            } else throw new HttpException("Bad credential", HttpStatus.FORBIDDEN);
        } catch (e) {
            throw new HttpException("Bad informations", HttpStatus.BAD_REQUEST);
        }
    }
}