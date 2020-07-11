import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ConfigurationService } from '../configuration.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post = {};
  id:any;
  constructor(private route : ActivatedRoute, private config : ConfigurationService,
  private loc : Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getpostbyid(this.id );
  }

  getpostbyid(id : any)
  {
    this.post =  this.config.getBlog().posts[id-1];
   }

  getback()
  {
    
     this.loc.back();    
  }
}
