import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BtnDirective } from './directives/btn.directive';

@NgModule({
  declarations: [BtnDirective],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule
    

  ],
  exports:[
    NgZorroAntdModule,
    FormsModule,
    BtnDirective
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class ShareModule { }
