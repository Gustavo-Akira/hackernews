import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HackersService } from 'src/app/service/hackers.service';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss'],
})
export class NewestComponent implements OnInit {
  newestStories =[];
  page = 0;
  max = 0;
  min=0;
  pages=0;
  constructor(private hackerService:HackersService, private route: ActivatedRoute) { }

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
    this.hackerService.getNewestStories().subscribe((results: Number[])=>{
      this.pages = results.length;
       for (let index = this.min; index < this.max; index++) {
        this.hackerService.getStory(results[index]).subscribe(result=>{
          this.newestStories.push(result);
        }); 
       }
    });
  }

}
