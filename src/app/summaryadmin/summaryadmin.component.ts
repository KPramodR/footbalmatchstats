import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';


@Component({
  selector: 'app-summaryadmin',
  templateUrl: './summaryadmin.component.html',
  styleUrls: ['./summaryadmin.component.css']
})
export class SummaryadminComponent implements OnInit {

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

  deleteMatch(id?: number) : void {
    console.log("ID" + id);
 
     this.statsService.deleteMatch(id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      }); 
      window.location.reload();
    }

}
