import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { KhedmaComponent } from './khedma/khedma.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KhedmaService } from './khedma.service';
import { TalabatComponent } from './talabat/talabat.component';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { TalabStateComponent } from './talab-state/talab-state.component';

import { CommonModule } from '@angular/common';
import { PoliceManComponent } from './police-man/police-man.component';
import { SignOrRegisterComponent } from './sign-or-register/sign-or-register.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
@NgModule({
  declarations: [
    AppComponent,
    KhedmaComponent,
    HomeComponent,
    TalabatComponent,
    DialogComponent,
    TalabStateComponent,
    PoliceManComponent,
    SignOrRegisterComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbCarouselModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule

  ],
  providers: [KhedmaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
