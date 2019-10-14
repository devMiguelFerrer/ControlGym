import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private menu: MatSidenav;
  private titulo: string;

  constructor() {
    this.titulo = 'Control Gym';
   }

  setMenu(menu: MatSidenav): void {
    this.menu = menu;
  }

  abrirMenu(): void {
    this.menu.open();
  }

}
