import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearComponent } from './list/crear/crear.component';
import { ListComponent } from './list/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'lista', component: ListComponent },
  { path: 'crear', component: CrearComponent },
  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
