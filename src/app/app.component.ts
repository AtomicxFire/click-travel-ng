import { ClickTravelService } from './services/click-travel.service';
import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Destination } from './interfaces/destination';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';

  constructor(private _clickTravel: ClickTravelService) {}

  public destinations: Observable<Destination[]>

  ngOnInit() {
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
    return el.name;
  }
}
