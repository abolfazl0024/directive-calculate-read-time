import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReadTimeDirective } from './read-time.directive';

@Component({
  selector: 'app-root',
  imports: [ReadTimeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive-calculate-read-time';
readTmine!:number;
  onReadTimeCalculated(readTime:number){
this.readTmine=readTime;
  }
}
