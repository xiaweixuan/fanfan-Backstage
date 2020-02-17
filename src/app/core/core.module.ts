import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ShareModule } from '../share/share.module';
import { SideblockComponent } from './components';
import { CoreAsideService } from '../services/core.aside.services';
import { MainblockComponent } from './components/mainblock/mainblock.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [CoreComponent, SideblockComponent, MainblockComponent, SearchComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ShareModule,
  ],
  providers:[CoreAsideService]
  
})
export class CoreModule { }
