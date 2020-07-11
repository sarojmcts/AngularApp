import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  intro ={};


  constructor(private config  : ConfigurationService) { }

  ngOnInit() {
    this.intro = this.config.getintro();
  }

}
