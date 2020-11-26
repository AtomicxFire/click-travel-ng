import { Ticket } from './../../interfaces/tickets';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'one-ticket',
  templateUrl: './one-ticket.component.html',
  styleUrls: ['./one-ticket.component.scss']
})
export class OneTicketComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}
