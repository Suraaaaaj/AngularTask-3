import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'active',
    component:UserListComponent
  },
  {
    path:'deleted',
    component:UserListComponent
  },
  {
    path:'manage',
    loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
