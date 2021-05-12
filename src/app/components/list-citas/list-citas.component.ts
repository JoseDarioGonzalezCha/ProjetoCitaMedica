import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
/* @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>() ; */

  citas: any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getCitas().subscribe(res => {
      this.citas = res;
      }, err => console.error(err)
      );
  }

  /* sin conexion
   eliminarCita(index: number) {
    this.deleteCita.emit(index);
  } */

}
