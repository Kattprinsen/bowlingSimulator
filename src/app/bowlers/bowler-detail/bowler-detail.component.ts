import { Component, OnInit, Input } from '@angular/core';

import{ Bowler } from '../services/bowler';

@Component({
  selector: 'app-bowler-detail',
  templateUrl: './bowler-detail.component.html',
  styleUrls: ['./bowler-detail.component.css']
})
export class BowlerDetailComponent implements OnInit {

  @Input() bowler?: Bowler;

  constructor() { }

  ngOnInit(){

  }

}
