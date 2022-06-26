import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserSettingsModule { }
