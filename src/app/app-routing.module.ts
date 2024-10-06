import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './screens/user/user.component';
import { CourtComponent } from './screens/courts/courts.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path : 'court', component: CourtComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
