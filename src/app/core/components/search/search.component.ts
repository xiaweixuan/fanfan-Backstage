import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  name_search:string;
  time_search:string;
  goods_state:string;
  visible:string;
  page:number;
  constructor() { }

  ngOnInit(): void {
  }

}
