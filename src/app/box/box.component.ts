import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Player, Position, Card } from '../app.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() player: Player;

  position: Position;

  constructor() {
    this.position = new Position();
    this.player = new Player();
    this.position.card = new Card('');
   }

  clean(): void {
    this.position.clean();
  }

  dragOnPosition(event): void {
    this.position.clean();
  }

  dropOnPosition(event): void {
    this.allowDrop(event);
    this.position.card = this.player.card;
  }

  allowDrop(event): void {
    event.preventDefault();
  }

}
