import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll/lib';

import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { MaterialConfigurationModule } from './material-configuration/material-configuration.module';

@NgModule({
  declarations: [
    LoadingScreenComponent
  ],
  imports: [
    CommonModule,
    DragScrollModule,
    MaterialConfigurationModule
  ],
  exports: [
    LoadingScreenComponent,
    DragScrollModule,
    MaterialConfigurationModule
  ]
})
export class SharedModule {
}
