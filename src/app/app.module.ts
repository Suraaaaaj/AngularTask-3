import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ManageComponent } from './manage/manage.component';
import { UserDetailsComponent } from './manage/user-details/user-details.component';
import { FullNamePipePipe } from './pipe/full-name-pipe.pipe';
import { StatusPipePipe } from './pipe/status-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    ManageComponent,
    UserDetailsComponent,
    FullNamePipePipe,
    StatusPipePipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
