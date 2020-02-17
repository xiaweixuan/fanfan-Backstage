import { Injectable } from '@angular/core';
import { AsideCatalogList } from './data-type/core.data-type';

@Injectable()
export class CoreAsideService {
    getAsideCatalogList():AsideCatalogList{
        return [
            {
                title:'统计',
                icon:'pie-chart',
                content:['用户分析']
            },{
                title:'管理',
                icon:'control',
                content:['文件管理','用户管理','文案管理']
            },{
                title:'开发',
                icon:'slack-square',
                content:['基本配置','接入权限']
            },{
                title:'设置',
                icon:'setting',
                content:['账户权限']
            }
        ]
    }
}