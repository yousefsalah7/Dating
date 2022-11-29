import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KhedmaComponent } from './khedma/khedma.component';
import { TalabatComponent } from './talabat/talabat.component';
import { TalabStateComponent } from './talab-state/talab-state.component';
import { PoliceManComponent } from './police-man/police-man.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SignOrRegisterComponent } from './sign-or-register/sign-or-register.component';

const routes: Routes = [
  {path:"khedma",component:KhedmaComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"talabat",component:TalabatComponent},
  {path:"talabastate",component:TalabStateComponent},
  {path:"PoliceMan",component:PoliceManComponent},
  {path:"SignOrRegister",component:SignOrRegisterComponent},
  {path:"DashBoard",component:DashBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
