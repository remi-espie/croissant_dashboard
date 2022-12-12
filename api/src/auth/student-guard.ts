import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";

@Injectable()
export class StudentGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const login = request.login;
        const id = request.params["id"]
        if (login.studentId == id) return true
        else throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }
}
