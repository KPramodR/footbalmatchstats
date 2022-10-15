import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  match:Match = {
    homeTeam: '',
    homeTeamScore:0,
    awayTeam: '',
    awayTeamScore: 0
  };
  constructor(private statsService:StatserviceService) { }
  submitted = false;

  addMatch(): void {
    const data = {
      homeTeam: this.match.homeTeam,
      awayTeam: this.match.awayTeam
    };

    this.statsService.addMatch(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

  }

  newMatch(): void {
    this.submitted = false;
    this.match = {
      homeTeam: '',
      awayTeam: ''
    };
  }

  ngOnInit(): void {
  }

}
