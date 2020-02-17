import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch: 'full'},
  {path:'login',component: LoginComponent},
  {path:'core',component: CoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
