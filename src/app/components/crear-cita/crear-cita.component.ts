import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import {FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  

  nome = '';
  data = '';
  hora = '';
  sintomas = ''; 

 formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>(); // decorador @Output para enviar "CITA" ao pai, por meio da classe EventEmiter, passando um objeto do tipo eny.
 
 
  constructor( private router: Router, private cruidService: CrudService) { 
    
  }

  ngOnInit(): void {
  }

    //Validação que verifica se todos os campos estão preenchidos
    agregarCita() {
    if(this.nome == '' || this.data == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    
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
  } 

}
