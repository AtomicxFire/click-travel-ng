import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared-module/shared-module.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { OneTicketComponent } from './one-ticket/one-ticket.component';



@NgModule({
  declarations: [TicketsComponent, OneTicketComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    RouterModule
  ],
  exports: [TicketsComponent, OneTicketComponent]
})
export class TicketsModule { }
