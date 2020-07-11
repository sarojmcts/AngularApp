import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  pricing ={};
  constructor(private config:ConfigurationService) { }

  ngOnInit() {
    this.pricing = this.config.getPricing();
  }

}
