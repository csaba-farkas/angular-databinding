import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    @Output() numberCreatedEvent = new EventEmitter<{num: number}>();
    numberCreated = 0;
    timer; 
    constructor() { }

    ngOnInit() {
    }

    onStartClicked() {
        console.log('Start button clicked');
        this.timer = setInterval(() => { 
            this.numberCreated++; // I don't want to emit 0 because it's neither odd or even
            this.numberCreatedEvent.emit({num: this.numberCreated}) 
        }, 2000);
    }

    onStopClicked() {
        console.log('Stop button clicked');
        clearInterval(this.timer);
    }

}
