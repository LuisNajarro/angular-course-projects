import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  clickLog: Array<number> = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickLog.push(this.clickLog.length + 1);
  }

  getBackgroundColor(n: number) {
    if (n >= 5) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
