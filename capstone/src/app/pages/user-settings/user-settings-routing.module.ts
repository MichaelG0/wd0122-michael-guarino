import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from './user-settings.component';

const routes: Routes = [
  {
    path: '', component: UserSettingsComponent },
  {
    path: 'password',
    loadChildren: () => import('./psw/psw.module').then((m) => m.PswModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {}
