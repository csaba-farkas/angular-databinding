import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    @Output() numberCreatedEvent = new EventEmitter<{num: number}>();   // EventEmitter emits an object with property 'num'
    numberCreated = 0;  // this is the number that is incremented every two seconds
    timer;  // this property will hold the reference to the timer
    constructor() { }

    ngOnInit() {
    }

    onStartClicked() {
        // create a timer that fires at every two seconds. Whenever the timer fires, the anonym function nested is executed
        this.timer = setInterval(() => { 
            this.numberCreated++; // I don't want to emit 0 because it's neither odd or even
            this.numberCreatedEvent.emit({num: this.numberCreated}) // emit an object with property num = this.numberCreated
        }, 2000);
    }

    onStopClicked() {
        // stop the timer => call clearInterval and pass the reference of our timer as a parameter
        // this.timer is essentially holding an ID that is used to identify our timer
        clearInterval(this.timer);
    }

}
