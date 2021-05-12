import { Time } from "@angular/common";

export interface Cita {
    id?: number;
    nome?: string;
    data?: Date;
    hora?: Time;
    sintomas?: string;
    createdAt?: Date;
    updatedAt?: Date;

}