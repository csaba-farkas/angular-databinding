import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    numbers: number[] = [];
    displayNumberCreated(event: {num: number}) {
        console.log(event);
        this.numbers.push(event.num);
    }

    getBackgroundColor(number: number) {
        return number % 2 === 0 ? {'background-color': 'beige'} : {'background-color': 'burlywood'}; 
    }
    getClass(number: number) {
        return number % 2 === 0 ? 'even' : 'odd';
    }
}
