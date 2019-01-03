import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../core/services/notification.service';
import { BaseHttpClientService } from '../../core/services/base-http-client.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  errorUrl = 'https://reqres.in/api/users/23';

  constructor(
    private baseHttpClient: BaseHttpClientService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.baseHttpClient.get(this.errorUrl).subscribe(
      () => {
        this.notificationService.success('Success', 'Success notification');
      },
      () => { this.notificationService.error('Error', 'Not loaded data!'); }
    );
  }
}
