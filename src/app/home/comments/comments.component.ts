import { Component, OnInit } from '@angular/core';
import { HackersService } from 'src/app/service/hackers.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  constructor(private hackerService:HackersService) { }

  ngOnInit(): void {
    
  }

}
