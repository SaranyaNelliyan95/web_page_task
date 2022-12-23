import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { BlogComponent } from './blog/blog.component';
import {MatCardModule} from '@angular/material/card';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    BlogComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
