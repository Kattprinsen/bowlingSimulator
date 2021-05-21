import { Component, OnInit } from '@angular/core';

import { Bowler } from './services/bowler';
import { BowlerService } from './services/bowlers.service';

//import { BOWLERS } from './services/bowlers-mock';

@Component({
  selector: 'app-bowlers',
  templateUrl: './bowlers.component.html',
  styleUrls: ['./bowlers.component.css']
})
export class BowlersComponent implements OnInit {

  title = 'Bowlers of tomorrow';
  //bowlersMock = BOWLERS;
  selectedBowler?: Bowler;
  bowlers: Bowler[] = [];

  constructor(private bowlerService: BowlerService) { }

  ngOnInit(){
    this.getBowlers();
  }

  getBowlers(): void {
    this.bowlers = this.bowlerService.getBowlers();
  }


  onSelect(bowler: Bowler): void {
    this.selectedBowler = bowler;
    console.log('clicked:', bowler);

  }

}
