import { Observable } from 'rxjs';
import { ClickTravelService } from './../../services/click-travel.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _clickTravel: ClickTravelService) { }

  title = 'Choose your tickets to';

  public destinationCode: string;

  public tickets: Observable<Ticket[]>

  public selectedTicket: Ticket;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.destinationCode = params['code']; // (+) converts string 'id' to a number
      this.tickets = this._clickTravel.getTickets(this.destinationCode)
       // In a real app: dispatch action to load the details here.
    });
  }

  trackByTicket(index: number, el: any): number {
    return el.flight + el.seat;
  }

  selectTicket(ticket: Ticket) {
    this.selectedTicket = ticket
  }

}
