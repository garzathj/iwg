import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HbrickComponent } from './hbrick/hbrick.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HbrickComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
