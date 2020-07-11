import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pager;
  @Output() setpage: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
setcurrentpage(pagenumber : number)
{
  this.setpage.emit(pagenumber);
  
}
}
