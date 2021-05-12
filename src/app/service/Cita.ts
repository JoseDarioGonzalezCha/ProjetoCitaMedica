import { Time } from "@angular/common";

export interface Cita {
    id?: number,
    name?: string,
    date?: Date,
    time?: Time,
    description?: string,
    created_at?: Date,

}