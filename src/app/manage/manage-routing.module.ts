import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ManageComponent } from './manage.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
    {
        path: '',
        component: ManageComponent,
        
        children : [
            {
                path: 'create',
                component: CreateUserComponent  
            },  
            {
                path: ':id',
                component: UserDetailsComponent,
            },
            {
                path: 'edit/:id',
                component: EditUserComponent
            },
            
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {
    constructor(){
        console.log("mange")
    }
 }
