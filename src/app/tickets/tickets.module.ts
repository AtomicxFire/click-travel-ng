import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared-module/shared-module.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';



@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    RouterModule
  ],
  exports: [TicketsComponent]
})
export class TicketsModule { }
