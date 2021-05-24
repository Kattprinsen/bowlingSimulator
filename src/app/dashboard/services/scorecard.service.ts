import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Scorecard } from './scorecard';
import { SCORECARDS } from './scorecard-mock'

import { MessageService } from '../../messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ScorecardService {

  firstScore = 0;
  secondScore = 0;
  frameScore = 0;

  constructor(private messageService: MessageService) { }

  //Using our mocked-api to get bowlers
  getScorecards(): Observable<Scorecard[]> {
    const scorecards = of(SCORECARDS);
    this.messageService.add('ScorecardService: fetching scorecards');
    return scorecards;
  }

  getScorecard(scorecard: Scorecard): Observable<any> {
    return of(scorecard);
  }

  updateScore(scorecard: Scorecard, score: number, frame: number): Observable<any> {
    if(frame === 2){
      scorecard.frame12 = score;
      this.secondScore = score;
      this.calculateFrame(scorecard, this.firstScore, this.secondScore);
    }
    scorecard.frame11 = score;
    this.firstScore = score;
    this.messageService.add('ScorecardService: updatingScore');
    return of(scorecard);
  }

  calculateFrame(scorecard: Scorecard, firstScore: number, secondScore: number){
    this.frameScore = firstScore + secondScore;
    scorecard.frame1Score = this.frameScore;
    return of(scorecard);
  }

}
