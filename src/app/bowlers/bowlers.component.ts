import { Component, OnInit } from '@angular/core';

import { Bowler } from './services/bowler';
import { BOWLERS } from './services/bowlers-mock';

@Component({
  selector: 'app-bowlers',
  templateUrl: './bowlers.component.html',
  styleUrls: ['./bowlers.component.css']
})
export class BowlersComponent implements OnInit {

  title = 'Bowlers of tomorrow';
  /*bowler: Bowler = {
    id: 1,
    name: 'Melle Licious',
    currentFrame: 0,
    totalScore: 300,
    doneBowling: false,
  }*/

  bowlersMock = BOWLERS;
  selectedBowler?: Bowler;

  constructor() { }

  ngOnInit(){

  }


  onSelect(bowler: Bowler): void {
    this.selectedBowler = bowler;
    console.log('clicked:', bowler);

  }

}
