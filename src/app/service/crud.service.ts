import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cita } from './cita'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Node API
 Api: 'http://localhost:8000/citas';

  

  constructor(private httpClient: HttpClient) { }

  getCitas(){
    return this.httpClient.get(`${this.Api}/citas`);
  }

  getCita(id: string){
    return this.httpClient.get(`${this.Api}/citas/${id}`);
  }

  saveCita(cita: Cita){
    return this.httpClient.post(`${this.Api}/citas`,cita);
  }

  deleteCita(id: string) {
    return this.httpClient.delete(`${this.Api}/citas/${id}`);
  }




  // AddBook(data: Book): Observable<any> {}


  /* deleteCitas(id:any): Observable<any>{
    let Api_url = `${this.Api}/delete-cita/${id}`;
    return this.httpClient.delete(Api_url, {headers})
  } */
}
