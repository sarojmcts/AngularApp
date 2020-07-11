import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 client ={};
  constructor(private config : ConfigurationService) { }

  ngOnInit() {
    this.client = this.config.getclient();
  }

}
