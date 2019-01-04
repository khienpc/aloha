import { Component, OnInit } from '@angular/core';
import { SnotifyPosition } from 'ng-snotify';

import { NotificationService } from '../../core/services/notification.service';
import { BaseHttpClientService } from '../../core/services/base-http-client.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  deleteUrl = 'https://reqres.in/api/users/2';
  rightUrl = 'https://reqres.in/api/users?delay=3';
  postUrl = 'https://reqres.in/api/users';
  putUrl = 'https://reqres.in/api/users/2';
  newUser = {
    'name': 'morpheus',
    'job': 'leader'
  };
  updatedUser = {
    'name': 'morpheus',
    'job': 'zion resident'
  };
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
    private notificationService: NotificationService,
    private baseHttpClient: BaseHttpClientService
  ) { }

  ngOnInit(): void {
    this.baseHttpClient.get(this.rightUrl, false, { reportProgress: true }).subscribe(
        () => {
          this.notificationService.success('Success', 'Success notification', SnotifyPosition.centerTop);
        },
        () => {
          this.notificationService.error('Error', 'Not loaded data!');
        }
      );
  }

  addData(): any {
    this.baseHttpClient.post(this.postUrl, this.newUser, false).subscribe(
      () => {
        this.notificationService.success('Success', 'Added successfully!');
      },
      () => {
        this.notificationService.error('Error', 'Added unsuccessfully!');
      }
    );
  }

  deleteData(): any {
    this.baseHttpClient.delete(this.deleteUrl).subscribe(
      () => {
        this.notificationService.success('Success', 'Deleted successfully!');
      },
      () => {
        this.notificationService.error('Error', 'Deleted unsuccessfully!');
      }
    );
  }

  updateData(): any {
    this.baseHttpClient.put(this.putUrl, this.updatedUser).subscribe(
      () => {
        this.notificationService.success('Success', 'Updated successfully!');
      },
      () => {
        this.notificationService.error('Error', 'Updated unsuccessfully!');
      }
    );
  }
}
