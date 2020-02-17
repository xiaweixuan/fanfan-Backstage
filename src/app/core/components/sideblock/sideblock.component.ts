import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AsideCatalog } from 'src/app/services/data-type/core.data-type';

@Component({
  selector: 'app-sideblock',
  templateUrl: './sideblock.component.html',
  styleUrls: ['./sideblock.component.scss']
})
export class SideblockComponent implements OnInit {
  @Input() dataList:Array<AsideCatalog>;
  @Output() tabSelected=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.dataList)
  }
  switchContent(e){
    console.log('切换到'+e.path[0].innerHTML)
    this.tabSelected.emit(e.path[0].innerHTML)
  }
}
