import { Component, OnInit } from '@angular/core';
import {HackersService} from '../../service/hackers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stories = [];
  constructor(private hackersService:HackersService ) { }

  ngOnInit(): void {
    this.hackersService.getTopStories().subscribe((results: Number[])=>{
      var y =0;
      results.forEach(x=>{
        if(y < 10){   
          this.hackersService.getStory(x).subscribe(result=>{
            this.stories.push(result);
          });
        }
        y+=1;
      });
      console.log(this.stories);
    });
  }

}
