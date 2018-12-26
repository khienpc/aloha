import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MenuListComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule {
}
