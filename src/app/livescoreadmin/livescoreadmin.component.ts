import { Component, OnInit , Input } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-livescoreadmin',
  templateUrl: './livescoreadmin.component.html',
  styleUrls: ['./livescoreadmin.component.css']
})
export class LivescoreadminComponent implements OnInit {

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
        },
        error: (e) => console.error(e)
      });
  }

  updateScore(id?: number, homeScore?: number, awayScore?: number) : void{

    const data = {
      homeTeamScore: homeScore,
      awayTeamScore: awayScore
    };

    this.statsService.updateMatchScore(id, data).subscribe({
      next: (res) => {},
      error: (e) => console.error(e)
    });
    window.location.reload();
  }


  endMatch(id?: number) : void {
    this.statsService.updateMatchStatus(id).subscribe({
     next: (res) => {},
     error: (e) => console.error(e)
   });
   window.location.reload();
 }
}
