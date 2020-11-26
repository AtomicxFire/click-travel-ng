import { TicketsComponent } from './tickets/tickets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

export const routes: Routes = [
  {
    path: ':code',
    component: TicketsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TicketsRoutingModule {}
