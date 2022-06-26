import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PswRoutingModule } from './psw-routing.module';
import { PswComponent } from './psw.component';


@NgModule({
  declarations: [
    PswComponent
  ],
  imports: [
    CommonModule,
    PswRoutingModule
  ]
})
export class PswModule { }
