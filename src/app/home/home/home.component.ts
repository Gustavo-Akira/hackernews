import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HackersService} from '../../service/hackers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stories = [];
  page: number;
  max: number;
  min: number;
  pages: number;
  constructor(private hackersService:HackersService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.page = parseInt(param['id']) ?parseInt(param['id']): 0;
      if(this.page == 0 || isNaN(this.page)){
        this.max = 10;
        this.min = 0;
      }else{
        this.max = (this.page + 1)*10;
        this.min = (this.page) *10;
      }
  });
    this.hackersService.getTopStories().subscribe((results: Number[])=>{
      this.pages = results.length;
      for (let index = this.min; index < this.max; index++) {
        this.hackersService.getStory(results[index]).subscribe(result=>{
          this.stories.push(result);
        });
      } 
    });
  }

}
