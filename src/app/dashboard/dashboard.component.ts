import { Component, OnInit } from '@angular/core';
import { Bowler } from '../bowlers/services/bowler'
import { BowlerService } from '../bowlers/services/bowlers.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bowlers: Bowler[] = [];

  constructor(private bowlerService: BowlerService) { }

  ngOnInit(){
    this.getBowlers();
  }

  getBowlers(): void {
    this.bowlerService.getBowlers()
      .subscribe(bowlers => this.bowlers = bowlers);
  }

}
