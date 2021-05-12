import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
/*   @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>() ;*/

  Citas:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCitas().subscribe(res => {
      console.log(res)
      this.Citas = res;
    });
  }

 /*  delete(id:any, n:any) {
    console.log(id);
    if(window.confirm('Quiere eliminar la cita?')) {
      this.crudService.deleteCita(id).subscribe((res) => {
        this.Citas.splice(n,1);
      })
    }
  } */

  /* sin conexion
   eliminarCita(index: number) {
    this.deleteCita.emit(index);
  } */

}
