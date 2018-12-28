import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnotifyPosition } from 'ng-snotify';

import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  rightUrl = 'https://reqres.in/api/users?delay=3';
  typesOfShoes: string[] = ['Boots',
    'Clogs', 'Loafers', 'Moccasins',
    'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers'];

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.httpClient.get(this.rightUrl).subscribe(
        () => {
          this.notificationService.success('Success', 'Success notification', SnotifyPosition.centerTop);
        },
        () => {
          this.notificationService.error('Error', 'Not loaded data!');
        }
      );
  }
}
