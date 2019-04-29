import { Component } from '@angular/core';

@Component({
  selector: 'toh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSizePx = 12;
  title = 'Tour of Heroes';

  sizeChanger(event?: Event) {
    console.log('event', event);
    console.log('fontSizePx', this.fontSizePx);
  }
}
