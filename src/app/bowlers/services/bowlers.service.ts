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
}
