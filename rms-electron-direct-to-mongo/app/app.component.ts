import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>欢迎使用试剂管理系统</h1>
    <nav>
      <a routerLink="/dict" routerLinkActive='active'><button>字典配置</button></a>&nbsp;&nbsp;
      <a routerLink="/display" routerLinkActive='active'><button>库存查询</button></a>&nbsp;&nbsp;
      <a routerLink="/importr" routerLinkActive='active'><button>试剂入库</button></a>&nbsp;&nbsp;
      <a routerLink="/exportr" routerLinkActive='active'><button>试剂出库</button></a>&nbsp;&nbsp;
      <a routerLink="/" routerLinkActive='active'><button>返回主页</button></a>&nbsp;&nbsp;
    </nav>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {};