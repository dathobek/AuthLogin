import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { Routes} from '@angular/router'

import { EmailComponent } from '../email/email.component';
import { ProfileComponent} from '../profile/profile.component';
import { LoginComponent} from '../login/login.component';
 
  const routes: Routes =[
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'email-login', component: EmailComponent},
  //{path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
