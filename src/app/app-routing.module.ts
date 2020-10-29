import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './users/login/login.component';
import { PagenotfoundComponent } from './users/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './users/dashboard.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: "auth", component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard], loadChildren: './users/users.module#UsersModule' },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    UsersModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
