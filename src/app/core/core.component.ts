import { Component, OnInit } from '@angular/core';
import { CoreAsideService } from '../services/core.aside.services';
import { AsideCatalogList } from '../services/data-type/core.data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  constructor(
    private coreAsideService:CoreAsideService,
    private router:Router
  ) { }
  asideCatalogList:AsideCatalogList;
  nowModule:string;
  ngOnInit(): void {
    this.asideCatalogList=this.coreAsideService.getAsideCatalogList();
    this.nowModule=this.coreAsideService.getAsideCatalogList()[0].content[0];
    // console.log(this.asideCatalogList)
  }
  switchContent(ctx){
    // console.log(ctx)
    this.nowModule=ctx;
  }
  logout(){
    this.router.navigate(['/login']);
  }

}
