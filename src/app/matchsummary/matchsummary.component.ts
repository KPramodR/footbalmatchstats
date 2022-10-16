import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-matchsummary',
  templateUrl: './matchsummary.component.html',
  styleUrls: ['./matchsummary.component.css']
})
export class MatchsummaryComponent implements OnInit {

  matches?: Match[];
 
  constructor(private statsService:StatserviceService) { }


  ngOnInit(): void {
    this.loadMatchSummary();
  }

  loadMatchSummary() : void {
    this.statsService.getMatchesSummary()
      .subscribe({
        next: (data) => {
          this.matches = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
