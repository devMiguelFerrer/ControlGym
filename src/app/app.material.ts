import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule
 } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule
    ]
})
export class AppMaterial { }
