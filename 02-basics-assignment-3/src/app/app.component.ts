import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  clickLog: Array<Date> = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickLog.push(new Date());
  }

  getBackgroundColor(index: number) {
    if (index >= 4) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
