import { Component, OnInit } from '@angular/core';

import { Bowler } from './services/bowler';
import { BowlerService } from './services/bowlers.service';

//import { BOWLERS } from './services/bowlers-mock';
import { MessageService } from '../messages/services/message.service';

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

  constructor(private bowlerService: BowlerService,
    private messageService: MessageService) { }

  ngOnInit(){
    this.getBowlers();
  }

  getBowlers(): void {
    this.bowlerService.getBowlers()
    .subscribe(bowlers => this.bowlers = bowlers);
  }


  onSelect(bowler: Bowler): void {
    this.selectedBowler = bowler;
    //console.log('clicked:', bowler); using the messageServie instead
    this.messageService.add(`BowlersComponent: Selected bowler id=${bowler.id}`);
  }

}
