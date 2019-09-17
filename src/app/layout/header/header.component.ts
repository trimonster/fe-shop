import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];
  // tslint:disable-next-line:ban-types
  visibleSidebar: Boolean;
  notifications: any[];
  iconMess: any;
  iconBell: string;

  constructor() { }

  ngOnInit() {
    this.initMenu();
    this.visibleSidebar = true;
    this.notifications = [];
    // tslint:disable-next-line:no-unused-expression
    this.iconMess = 'far fa-comment';
    this.iconBell = 'far fa-bell';
  }


  initMenu() {
    this.menuItems = [
      {
        label: '',
        items: [
            {label: 'Open'},
            {label: 'Quit'}
        ]
      }
    ];
  }

}
