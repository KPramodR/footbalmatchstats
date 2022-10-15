import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.css']
})
export class LivescoreComponent implements OnInit {

  matches?: Match[];

  constructor(private statsService:StatserviceService) { }

  ngOnInit(): void {
    this.loadRunningMatches();
  }

  loadRunningMatches() : void {
    this.statsService.getAllRunningMatches()
      .subscribe({
        next: (data) => {
          this.matches = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
