import { Component, OnInit } from '@angular/core';
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
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  endMatch(id?: number) : void {
    this.statsService.updateMatchStatus(id).subscribe({
     next: (res) => {
       console.log(res);
     },
     error: (e) => console.error(e)
   });
   window.location.reload();
 }
}
