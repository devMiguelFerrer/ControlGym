import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private menu: MatSidenav;
  private titulo: string;
  public mostrarSideMenuChange = new Subject<boolean>();
  public mostrarTiempoChange = new Subject<boolean>();

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
