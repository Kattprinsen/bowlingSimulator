import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Bowler } from './bowler';
import { BOWLERS } from './bowlers-mock'

import { MessageService } from '../../messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class BowlerService {

  constructor(private messageService: MessageService) { }

  //Using our mocked-api to get bowlers
  getBowlers(): Observable<Bowler[]> {
    const bowlers = of(BOWLERS);
    this.messageService.add('BowlerService: fetching bowlers');
    return bowlers;
  }

  /*
  using the mock to find a bowler with an id
  that matches the user wanted.
  */
  getBowler(id: number): Observable<Bowler> {
    const bowler = BOWLERS.find(h => h.id === id)!;
    this.messageService.add(`BowlerService: fetched bowler id=${id}`);
    return of(bowler);
  }

}
