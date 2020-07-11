import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content={};
  constructor(private config : ConfigurationService) { }

  ngOnInit() {
    this.content = this.config.getcontent();
  }

}
