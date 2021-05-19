import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  @Output() nuevaCita = new EventEmitter<any>(); // decorador @Output para enviar "CITA" ao pai, por meio da classe EventEmiter, passando um objeto do tipo eny.
 
 
  constructor( private router: Router, 
               private cruidService: CrudService, 
               private formBuilder: FormBuilder
               ){ 
                }

  ngOnInit(): void {

    // this.formulario = this.formBuilder.group({
    //   Name: [null],
    //   date: [null],
    //   time: [null],
    //   description: [null],
    // });

  //     this.formulario = new FormGroup({
  //     Name: new FormControl(null),
  //     date: new FormControl(null),
  //     time: new FormControl(null),
  //     description: new FormControl(null),
  //     })

  // }

  // onSubmit() {
  //   console.log(this.formulario)
 }


    createNewCita() {
     this.cruidService.createCita(this.cita)
      .subscribe( res => {
        console.log(res);
      }, err => console.error(err)

      )
    }
   /*  

    //Validação que verifica se todos os campos estão preenchidos
  // agregarCita() {
  //   if(this.Name == '' || this.date == '' || this.time == '' || this.description == ''){
  //     this.formularioIncorrecto = true;
  //     return;
  //   }
  //   this.formularioIncorrecto = false;

// validarCita() {
  //   if(this.cita == '') {
  //     this.formularioIncorrecto = true;
  //     console.log(this.cita)
  //     return;
  //   }
  //   this.formularioIncorrecto = false;
  // }

    
// validarCita() {
  //   if(this.cita == '') {
  //     this.formularioIncorrecto = true;
  //     console.log(this.cita)
  //     return;
  //   }
  //   this.formularioIncorrecto = false;
  // }

    //Criamos um objeto para enviar ao pai
    const CITA = {
      nome: this.nome,
      data: this.data,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos()
  }

  //Reset os campos após o envio das informações
  resetCampos() {
      this.nome = '';
      this.data = '';
      this.hora = '';
      this.sintomas = '';
  }  */

}
