import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activetab="home";
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  getactivetab(tab:string)
  {
    this.activetab=tab;
  }
  logout()
  {
    this.auth.logout();
  }
}
