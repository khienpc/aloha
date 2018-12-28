import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  errorUrl = 'https://reqres.in/api/users/23';

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.httpClient.get(this.errorUrl).subscribe(
      () => {
        this.notificationService.success('Success', 'Success notification');
      },
      () => { this.notificationService.error('Error', 'Not loaded data!'); }
    );
  }

}
