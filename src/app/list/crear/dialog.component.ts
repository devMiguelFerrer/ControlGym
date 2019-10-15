import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

    formControl: FormGroup;

    constructor() {}

    ngOnInit() {
        this.formControl = new FormGroup({
            title: new FormControl('', { validators: [ Validators.required, Validators.minLength(1) ] }),
            series: new FormControl('', { validators: [ Validators.required, Validators.minLength(1) ] }),
            reps: new FormControl('', { validators: [ Validators.required, Validators.minLength(1) ] }),
            time: new FormControl('', { validators: [ Validators.required, Validators.minLength(1) ] }),
            kgprev: new FormControl('', { validators: [ Validators.required, Validators.minLength(1) ] }),
        });
    }

    addExercise(data: any) {
        console.log(data.status);
        // console.log(this.formControl.value);
        // this.createExerciseService.setCreatedExercise(this.formControl.value);
    }

    cancelExercise() {
        // console.log(this.createExerciseService.getCreatedExercise());
    }

}
