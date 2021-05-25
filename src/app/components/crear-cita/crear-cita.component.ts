import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/service/cita';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})

export class CrearCitaComponent implements OnInit {

  onSubmit(form) {
    console.log(form);
  }

  //formulario: FormGroup;
  
  cita: Cita = {
    Name: '',
    date: '',
    time: '',
    description: '',
  };

  formularioIncorrecto = true;

  errorMessage = '';
 
  constructor( private router: Router, private cruidService: CrudService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
  }
    
  createNewCita() {
  this.cruidService.createCita(this.cita)
    .subscribe( res => {
      console.log(res);
      this.router.navigate(['/list-citas']);
    }, err => this.errorMessage = err
    )
  }}
