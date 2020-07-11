import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blog : any={};
  allitem:any = [];
  pages:any=[];
  pagesize=3;
  pager:any={};
  constructor(private config : ConfigurationService, private pageservice : PagerService) { }

  ngOnInit() {
    this.blog = this.config.getBlog(); 
    this.allitem = this.config.getBlog().posts;   
    this.setpage(1);
  }

  setpage(pagenumber: number): any {
    this.pager = this.pageservice.getpager(this.allitem.length,pagenumber,this.pagesize);
    this.pages=this.allitem.slice(this.pager.startindex, this.pager.endindex + 1);
    console.log(this.pager);
  }

}
