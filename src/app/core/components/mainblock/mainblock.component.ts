import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainblock',
  templateUrl: './mainblock.component.html',
  styleUrls: ['./mainblock.component.scss']
})
export class MainblockComponent implements OnInit {
  @Input() nowModule:string;
  listOfData = [
    {
      key: '1',
      usr_icon:" https://xiaweixuan.github.io/ProjectPicture/xwxblog/action2.bmp",
      name: 'John Brown',
      gender: '男',
      phone: '15030716898',
      publish_content:2,
      registration_time:'2019-10-3 14:34:07'
    },
    {
      key: '2',
      usr_icon:"https://xiaweixuan.github.io/ProjectPicture/xwxblog/action2.bmp",
      name: 'leo',
      gender: '男',
      phone: '15030716898',
      publish_content:2,
      registration_time:'2019-10-3 14:34:07'
    },{
      key: '3',
      usr_icon:"https://xiaweixuan.github.io/ProjectPicture/xwxblog/action3.bmp",
      name: 'xin',
      gender: '男',
      phone: '15030716898',
      publish_content:2,
      registration_time:'2019-10-3 14:34:07'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
