import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner = {};

  constructor(private config : ConfigurationService) { }

  ngOnInit() {
    this.banner = this.config.getbanner();
  }

}
