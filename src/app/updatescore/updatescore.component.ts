import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';


@Component({
  selector: 'app-updatescore',
  templateUrl: './updatescore.component.html',
  styleUrls: ['./updatescore.component.css']
})
export class UpdatescoreComponent implements OnInit {

  match:Match = {
    id:0,
    homeTeam: '',
    homeTeamScore:0,
    awayTeam: '',
    awayTeamScore: 0
  };

  constructor(private statsService:StatserviceService) { }

  ngOnInit(): void {
  }

  updateMatch(): void {
    const data = {
      homeTeam: this.match.homeTeam,
      awayTeam: this.match.awayTeam
    };

    this.statsService.addMatch(data).subscribe({
      next: (res) => {
        console.log(res);
       // this.submitted = true;
      },
      error: (e) => console.error(e)
    });
    window.location.reload();
  }
}
