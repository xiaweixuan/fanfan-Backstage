import { Injectable } from '@angular/core';
import { SignIn } from './data-type/login.data-type';


@Injectable()
export class LoginService {
    SignIn():SignIn{
        return {allow:true}
    }
}