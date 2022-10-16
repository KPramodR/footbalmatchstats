import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match.model';
import { StatserviceService } from '../statservice.service';
import { SummaryadminComponent} from '../summaryadmin/summaryadmin.component';
import { LivescoreadminComponent } from '../livescoreadmin/livescoreadmin.component';
import {ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-newmatchaddition',
  templateUrl: './newmatchaddition.component.html',
  styleUrls: ['./newmatchaddition.component.css']
})
export class NewmatchadditionComponent implements OnInit {

 // selectedTabIndex: number
  requiredForm!: FormGroup;
  matches?: Match[];
  id?: number;

  match:Match = {
    homeTeam: '',
    homeTeamScore:0,
    awayTeam: '',
    awayTeamScore: 0
  };

  
  constructor(private statsService:StatserviceService, private fb: FormBuilder
     //, private route: ActivatedRoute,private router: Router
    ) { 
      
    }

  
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
    window.location.reload();
  }

 
  newMatch(): void {
    this.submitted = false;
    this.match = {
      homeTeam: '',
      awayTeam: ''
    };
  }

  ngOnInit(): void {
    
    this.loadRunningMatches();
   // this.onTabChanged();
  }

 /* selectedTabChange(event) {
    this.index = this.event.index
    this.onTabChanged()
  }

  onTabChanged() {
    if (this.index==0) {
      ...
    } else if (this.index==1) {
      ...
    }
    ...
  } */

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
