import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import  { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TwitterService {
 
  
   
   constructor(private http: HttpClient) {}
  
   getTimeline(): Observable <any> {
     console.log("entered the data into service");
     return this.http.get('../assets/data/Timeline.json');
   }
  
  //  getMentions() {
  //    return this.http
  //      .get<any[]>(this.api_url+'/mentions_timeline')
  //      .pipe(map(data => data));
  
  //  }
  
 }
