import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dados-cita',
  templateUrl: './dados-cita.component.html',
  styleUrls: ['./dados-cita.component.css']
})
export class DadosCitaComponent implements OnInit {

  obtenerId: any;
  atualizarForm: FormGroup; 

  constructor( 
    public formBuilder : FormBuilder,
    private router: Router, 
    private cruidService: CrudService, 
    private activatedRoute: ActivatedRoute,
    ) { 

    this.obtenerId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.obtenerId)

    this.cruidService.getCita(this.obtenerId).subscribe(res => {
      console.log(res)
      this.atualizarForm.setValue({
        Name: res['Name'],
        date: res['date'],
        time: res['time'],
        description: res['description']
      });

    }); 

    this.atualizarForm = this.formBuilder.group({
        Name: [''],
        date: [''],
        time: [''],
        description: ['']
    })
    console.log(this.atualizarForm.value)
  }
  
  ngOnInit(): void { }

  onUpdateCita(): any {
    this.cruidService.updateCita(this.obtenerId, this.atualizarForm.value)
    .subscribe(() => {
        console.log('data update'); 
        this.router.navigateByUrl('/list-citas');
      }, err => {
        console.log(err);
      });
  } 
  //mostra no console a cita mais no completa em formulario
 /*  if(params.id) {
      this.cruidService.getCita(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.cita = res;
        }, err => console.error(err) 
      ) }  */ 

}
