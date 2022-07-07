import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
