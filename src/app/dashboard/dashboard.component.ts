import { Component, OnInit } from '@angular/core';
import { Bowler } from '../bowlers/services/bowler';
import { BowlerService } from '../bowlers/services/bowlers.service';

import { ScorecardService } from './services/scorecard.service';
import { Scorecard } from './services/scorecard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bowlers: Bowler[] = [];
  scorecards: Scorecard[] = [];
  pinsDown?: Scorecard;
  bowled = false;
  frame = 1;

  constructor(
    private bowlerService: BowlerService,
    private scorecardService: ScorecardService
  ) { }

  ngOnInit(){
    this.getBowlers();
  }

  getBowlers(): void {
    this.bowlerService.getBowlers()
      .subscribe(bowlers => this.bowlers = bowlers);
      this.getScorecards();
  }

  getScorecards(): void {
    this.scorecardService.getScorecards()
      .subscribe(scorecards => this.scorecards = scorecards);
  }

  pinsHit(scorecard: Scorecard, score: number): void {
    if (this.bowled) {
      console.log('secondstrike');
      this.scorecardService.updateScore(scorecard, score, this.frame);
      this.updateFrame(scorecard);
    }
    this.scorecardService.updateScore(scorecard, score, this.frame);
    this.bowled = true;
    this.frame = 2;
  }

  updateFrame(scorecard: Scorecard){
    this.scorecardService.getScorecard(scorecard);
  }
}
