import { Component, ViewChild } from '@angular/core';

import { LoadingScreenComponent } from './shared/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to aloha!';
  @ViewChild('appMainSpinner') loadingScreenComponent: LoadingScreenComponent;
}
