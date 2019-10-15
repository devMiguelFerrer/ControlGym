import { Component, OnInit } from '@angular/core';

import { RutinaModel, DiaModel, EjercicioModel, EjerciciosModel } from './../../models/rutina.model';
import { MatFormField, MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public indiceTab = 2;
  columnsToDisplay = ['id', 'reps', 'time', 'kgprev'];
  public mostrarBotones: boolean;
  public rutina: RutinaModel = {
    nombre: '',
    fecha: '',
    dias: []
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.mostrarBotones = false;
  }

  crearRutina(numDias: string): void {
    console.log(numDias);
    if (numDias === undefined) { return; }
    const numero = parseInt(numDias, 10);
    for (let i = 0; i < numero; i++) {
      const tempDia = {
        nomdia: `Día ${i + 1}`,
        ejercicios: []
      };
      this.rutina.dias.push(tempDia);
    }
    this.mostrarBotones = true;
  }

  addEjercicio(): void {
    const dialog = this.dialog.open(DialogComponent, {
      // width: '300px',
      // height: '400px'
    });
    dialog.afterClosed().subscribe(resp => {
      if (typeof resp === 'string') {
        console.log('null');
      } else {
        console.log(resp);
        const tempEjecicios: EjerciciosModel = {
          nomejer: resp.title,
          ejercicio: []
        };
        for (let i = 0; i < resp.series; i++) {
          const tempEjercicio: EjercicioModel = {
            nombre: resp.title,
            peso: resp.kgprev,
            reps: resp.reps,
            tiempoDescanso: resp.time,
            tiempoTrabajo: 0,
            id: i + 1,
            terminado: false
          };
          tempEjecicios.ejercicio.push(tempEjercicio);
        }
        this.rutina.dias[this.indiceTab].ejercicios.push(tempEjecicios);
      }
    });
  }

  guardarRutina(): void {
    console.log(this.rutina);
    console.log(this.indiceTab);
  }

  console(data: any): void {
    console.log(data);
  }

}
