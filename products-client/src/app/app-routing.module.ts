import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolDeleteComponent } from './school-delete/school-delete.component';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { SchoolAddComponent } from './school-add/school-add.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


import { LoginComponent } from './login/login.component'
import { AuthGuard } from './service/auth.guard'

// define the routes
const appRoutes: Routes = [
  { path: '', component: SchoolListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: SchoolAddComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SchoolSearchComponent, canActivate: [AuthGuard] },
  { path: 'delete', component: SchoolDeleteComponent, canActivate: [AuthGuard] },
  { path: 'delete/:naam', component: SchoolDeleteComponent, canActivate: [AuthGuard] },
  { path: 'edit/:naam', component: SchoolEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
  // otherwise redirect to home

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
