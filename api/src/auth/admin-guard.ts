import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";

@Injectable()
export class AdminGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const login = request.user;
        if(login.admin) return true;
        else throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
}
