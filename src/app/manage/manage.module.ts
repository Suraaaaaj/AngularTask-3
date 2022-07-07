import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MspinnerComponent } from './mspinner/mspinner.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    MspinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
