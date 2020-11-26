import { Observable } from 'rxjs';
import { ClickTravelService } from './../../services/click-travel.service';
import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interfaces/destination';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _clickTravel: ClickTravelService) { }

  title = 'Choose your dream destination...';

  public destinations: Observable<Destination[]>

  ngOnInit(): void {
    this.destinations = this._clickTravel.getDestination()
    .pipe(
      map(
        (destinations: Destination[]) => destinations.filter(
          (destination: Destination) => destination.isDreamDestination
        )
      )
    )
  }

  trackByDestination(index: number, el: any): number {
    return el.name + el.code;
  }

}
