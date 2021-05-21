import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Bowler } from './bowler';
import { BOWLERS } from './bowlers-mock'

@Injectable({
  providedIn: 'root'
})
export class BowlerService {

  constructor() { }

  //Using our mocked-api to get bowlers
  getBowlers(): Bowler[] {
    return BOWLERS;
  }
}
