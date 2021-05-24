import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'
import { Router, ActivatedRoute } from '@angular/router';
import {  Cita } from './../../service/Cita'
import { from } from 'rxjs';

@Component({
  selector: 'app-dados-cita',
  templateUrl: './dados-cita.component.html',
  styleUrls: ['./dados-cita.component.css']
})
export class DadosCitaComponent implements OnInit {


  atualCita: Cita = {
    Name: '',
    date: '',
    time: '',
    description: '',
  };

  onSubmit(form) {
    console.log(form); 
    console.log(this.atualCita);
  }

 
  constructor( 
    
    private router: Router, 
    private cruidService: CrudService, 
    private activatedRoute: ActivatedRoute,) 
    { }

  
    ngOnInit(): void { 
    const obtener = this.activatedRoute.snapshot.params;
    if(obtener.id) {
      this.cruidService.getCita(obtener.id)
      .subscribe(
        res => {
          console.log(res);
          this.atualCita = res;
        }, err => {
          console.error(err)
        } 
      )
    };
  } 


  updateCita(){
    console.log(this.atualCita)
    this.cruidService.updateCita(this.atualCita.id, this.atualCita)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-citas']);
      }, err => console.log(err)
    )
  }
  
}
