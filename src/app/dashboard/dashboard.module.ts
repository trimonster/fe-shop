import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
