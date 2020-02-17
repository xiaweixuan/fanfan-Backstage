import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ShareModule } from '../share/share.module';
import { LoginService } from '../services/login.services';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule,
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
