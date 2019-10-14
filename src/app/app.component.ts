import { HeaderService } from './header/header.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) menu: MatSidenav;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setMenu(this.menu);
  }

}
