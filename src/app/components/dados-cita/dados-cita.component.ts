import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-cita',
  templateUrl: './dados-cita.component.html',
  styleUrls: ['./dados-cita.component.css']
})
export class DadosCitaComponent implements OnInit {

  constructor( private router: Router, private cruidService: CrudService) { }

  ngOnInit(): void {
  }

}
