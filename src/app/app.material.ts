import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule
 } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule
    ]
})
export class AppMaterial { }
