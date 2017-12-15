import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { UserService } from './user.service';
import { AuthCheckGuard } from './auth-check.guard';

const appRoutes:Routes = [
  {
  path: '',
  component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthCheckGuard],
    component: DashboardComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthCheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
