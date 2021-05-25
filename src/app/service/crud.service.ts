import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import { Cita } from './cita'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Node API
  Api = 'http://localhost:8080';


  constructor(private httpClient: HttpClient) { }

  getCitas(){
    console.log(this)
    return this.httpClient.get<any>(`${this.Api}/citas`)
        .pipe(
          catchError(this.errorHandler)
        )
  }

  getCita(id: string){
    return this.httpClient.get<any>(`${this.Api}/citas/${id}`);
  }

  createCita(cita: Cita){
    console.log(this)
    console.log(this.Api)
    return this.httpClient.post(`${this.Api}/citas`,cita)
        .pipe(
          catchError(this.errorHandler)
        )
  }

  deleteCita(id: string) {
    return this.httpClient.delete(`${this.Api}/citas/${id}`);
  }

  updateCita(id: string|number, updateCita: Cita): Observable<Cita> {
    return this.httpClient.put(`${this.Api}/citas/${id}`, updateCita)
        .pipe(
          catchError(this.errorHandler)
        )
  }


  errorHandler(error: HttpErrorResponse){
    return ObservableThrowError(error.message)
  }

}
