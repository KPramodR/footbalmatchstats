import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from './model/match.model';

@Injectable({
  providedIn: 'root'
})
export class StatserviceService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addMatch(data: any): Observable<any> {
    return this.http.post(this.baseUrl+'/addmatch', data);
  }

  updateMatchScore(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl+'/updatematch/'+id, data);
  }

  updateMatchStatus(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl+'/finishmatch/'+id, data);
  }

  getAllRunningMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl+'/runningmatches');
  }

  getMatchesSummary(): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl+'/matchsummary');
  }
}
