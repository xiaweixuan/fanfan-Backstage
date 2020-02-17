import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    private loginservice:LoginService,
    private router:Router
  ) {}
  yhm:string;
  mm:string;
  identity:string;
  identityList :Array<string>=['管理员'];
  ngOnInit(): void {}
  toSignIn(){
    if(this.loginservice.SignIn().allow){
      console.log("登录成功")
      this.router.navigate(['core'])
    }
  }

}
