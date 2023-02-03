import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Things to Do for Week Two';
  thingstoAccomplish= [ // populate this array with the following
    'Brush up on JavaScript',
    'Come to grips with SQL',
    'Master programming'
  ];

  thingsDone=[]; // empty array 

  // Summary function
  TaskSummary():string {
    return `${this.thingstoAccomplish.length} to do / ${this.thingsDone.length} completed`;
  }
}
