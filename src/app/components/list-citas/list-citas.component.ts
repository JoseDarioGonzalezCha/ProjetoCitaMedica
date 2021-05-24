import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cita } from 'src/app/service/cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  citas: any = [];

  citaSelecionada: any = [];

  constructor(private crudService: CrudService, 
              private modalService: BsModalService) { }

  ngOnInit(): void {
   this.getCita();
  }

  getCita(){
    this.crudService.getCitas().subscribe(res => {
      console.log(res)
      this.citas = res.Citas;
      }, err => console.error(err)
      );
  }

  deleteCita(id) {
    //console.log(id)
    this.crudService.deleteCita(id).subscribe(res => {
      console.log(res);
      this.getCita();
    }, err => console.log(err)
    );
  }

  onDelete(citas) {
    this.citaSelecionada = citas;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm'});
  }

  onConfirmDelete() {
    this.crudService.deleteCita(this.citaSelecionada.id)
    .subscribe(
      success => {
        this.getCita();
        this.deleteModalRef.hide();
      },
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
  
}
