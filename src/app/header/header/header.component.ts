import { Component, OnInit } from '@angular/core';

import { HeaderService } from './../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public mostrarSideMenu: boolean;
  public mostrarTiempo: boolean;
  public titulo: string;
  public tiempo: number;

  constructor(public headerService: HeaderService) {
  }

  ngOnInit() {
    this.mostrarSideMenu = true;
    this.mostrarTiempo = true;
    this.titulo = 'Bienvenido';
    this.tiempo = 0;
    this.headerService.mostrarSideMenuChange.subscribe(menu => {
      this.mostrarSideMenu = menu;
    });
    this.headerService.mostrarTiempoChange.subscribe(tiempo => {
      this.mostrarTiempo = tiempo;
    });
  }

  abrirMenu(): void {
    this.headerService.abrirMenu();
  }

}
