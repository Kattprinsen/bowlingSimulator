import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bowler } from '../services/bowler';
import { BowlerService } from '../services/bowlers.service';

@Component({
  selector: 'app-bowler-detail',
  templateUrl: './bowler-detail.component.html',
  styleUrls: ['./bowler-detail.component.css']
})
export class BowlerDetailComponent implements OnInit {
  bowler: Bowler | undefined;

  /*
  old waiting for input to display bowler from
  bowlers component
  */
  //@Input() bowler?: Bowler;

  constructor(
    private route: ActivatedRoute,
    private bowlerService:BowlerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBowler();
  }

  getBowler(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bowlerService.getBowler(id)
      .subscribe(bowler => this.bowler = bowler);
  }

  goBack(): void {
    this.location.back();
  }

}
