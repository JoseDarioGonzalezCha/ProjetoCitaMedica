import { Component, OnInit } from '@angular/core';

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


  constructor() { }

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
