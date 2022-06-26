import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PswComponent } from './psw.component';

const routes: Routes = [{ path: '', component: PswComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PswRoutingModule { }
