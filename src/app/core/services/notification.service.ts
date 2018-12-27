import { Injectable } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private sNotificationService: SnotifyService) {
  }

  success(title: string, body: string): void {
    this.sNotificationService.create({
      title: title,
      body: body,
      config: {
        position: SnotifyPosition.rightTop,
        type: 'success'
      }
    });
  }

  error(title: string, body: string): void {
    this.sNotificationService.create({
      title: title,
      body: body,
      config: {
        position: SnotifyPosition.rightTop,
        type: 'error'
      }
    });
  }
}
