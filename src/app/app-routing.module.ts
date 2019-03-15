import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { RouteguardService } from './routeguard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashbord', component: DashbordComponent, canActivate: [RouteguardService] },
  { path: 'single-user/:id', component: SingleUserComponent, canActivate: [RouteguardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
