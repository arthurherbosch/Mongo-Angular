import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent }  from './app.component'

import { SchoolService } from './service/school.service'
import { AppRoutingModule } from './app-routing.module'
import { LoginComponent } from './login/login.component'
import { AuthenticationService } from './service/authentication.service'
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolAddComponent } from './school-add/school-add.component';
import { SchoolDeleteComponent } from './school-delete/school-delete.component';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  ReactiveFormsModule, 
                  AppRoutingModule ],
  declarations: [ AppComponent, 
                  SchoolListComponent,
                  SchoolAddComponent, 
                  SchoolSearchComponent,
                  SchoolDeleteComponent,
                  SchoolEditComponent,
                  LoginComponent ],
  providers:    [ SchoolService,
                  AuthenticationService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
