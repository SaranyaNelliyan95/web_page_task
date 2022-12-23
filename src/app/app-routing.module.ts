import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogaccessGuard } from './blogaccess.guard';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', loadChildren:()=> import('./users/users.module').then(m => m.UsersModule) },
  {path:'blog', loadChildren:()=> import('./blog/blog.module').then(m => m.BlogModule), 
  canActivate:[BlogaccessGuard]},
  {path:'login', component: LoginComponent},
  {path:'child', component:ChildComponent},
  {path:'employee', component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
