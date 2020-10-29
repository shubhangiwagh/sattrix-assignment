import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user-service';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'list', component: ListComponent, canActivate: [AuthGuard]}
    ]),
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ListComponent,
    PagenotfoundComponent,
  ],
  exports: [SidebarComponent],
  providers: [
    HttpClientModule,
    AuthGuard,
    UserService
  ]
})
export class UsersModule { }
