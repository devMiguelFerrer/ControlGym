
export interface RutinaModel {
    nombre: string;
    fecha: string;
    dias: DiaModel[];
}

export interface DiaModel {
    nomdia: string;
    ejercicios: EjerciciosModel[];
}

export interface EjerciciosModel {
    nomejer: string;
    ejercicio: EjercicioModel[];
}

export interface EjercicioModel {
    nombre: string;
    peso: number;
    reps: number;
    tiempoDescanso: number;
    tiempoTrabajo: number;
    id: number;
    terminado: boolean;
}
