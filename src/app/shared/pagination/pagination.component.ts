import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() pages: number[]|null;
  @Input() activePage: number|null;
  @Input() page: String;
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    for(const prop in changes){
      if(prop === "pages"){
        this.pages = Array((this.activePage+5)||1+5).fill(1).map((x,i)=>i + 1);
      }else{
        this.activePage = parseInt(changes[prop].currentValue);
      }
    }
  }
  
}
