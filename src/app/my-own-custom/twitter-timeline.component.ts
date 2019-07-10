import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';


@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.css'],
  providers:[ TwitterService ],
  
  
})
export class TwitterTimelineComponent implements OnInit {
   
public myTimeline:any;
 
  constructor(private api: TwitterService) { 
    this.myTimeline='';
    this.api.getTimeline().subscribe( data => {this.myTimeline = data; console.log(this.myTimeline);})
  }
 
  ngOnInit() {}
  
  
   
  // getTwitterTimeline(){ 
    
  //     )
  //  }
   
}