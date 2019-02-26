import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BoxComponent } from './box/box.component';

export class Card {
  img: string;
  constructor(img: string) {
    this.img = img;
  }
}

export class Player {
  score: number;
  card: Card;
}

export class Position {
  card: Card;
  constructor() {

  }
  clean() {
    console.log(this.card.img);
    this.card = new Card('');
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChildren('BoxComponent') child: QueryList<BoxComponent>;

  title = 'Jogo da velha';
  img = {src: ''};
  player1Img = {src: '../assets/player1.jpg'};
  player2Img = {src: '../assets/player2.jpg'};

  player1 = new Player();
  player2 = new Player();

  player = new Player();

  ngOnInit(): void {
    this.player1.card = new Card(this.player1Img.src);
    this.player2.card = new Card(this.player2Img.src);
  }

  clean(): void {
    this.child.forEach(element => {
      element.clean();
    });
  }

  dragOnPlayer1(event): void {
    this.player = this.player1;
  }
  dragOnPlayer2(event): void {
    this.player = this.player2;
  }

}
