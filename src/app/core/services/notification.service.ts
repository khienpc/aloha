import { Injectable } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { SnotifyType } from 'ng-snotify/snotify/types/snotify.type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snotifyService: SnotifyService) {
  }

  success(title: string, body: string, position: SnotifyPosition = SnotifyPosition.rightTop, type: SnotifyType = 'success'): void {
    this.snotifyService.create({
      title: title,
      body: body,
      config: {
        position: position,
        type: type
      }
    });
  }

  error(title: string, body: string, position: SnotifyPosition = SnotifyPosition.rightTop, type: SnotifyType = 'error'): void {
    this.snotifyService.create({
      title: title,
      body: body,
      config: {
        position: position,
        type: type
      }
    });
  }
}
