import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { Routes} from '@angular/router'

import { EmailComponent } from '../email/email.component'
import { ProfileComponent} from '../profile/profile.component'
 
  const routes: Routes =[
  {path: '', redirectTo: 'login', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
