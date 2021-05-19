import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/service/cita';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dados-cita',
  templateUrl: './dados-cita.component.html',
  styleUrls: ['./dados-cita.component.css']
})
export class DadosCitaComponent implements OnInit {

/*   obtenerId: any;
  atualizarForm: FormGroup; */

  cita: Cita = {
    Name: '',
    date: '',
    time: '',
    description: '',
 }; 
 
  constructor( 
    public formBuilder: FormBuilder,
    private router: Router, 
    private cruidService: CrudService, 
    private activatedRoute: ActivatedRoute) { 

    
    
      /*  this.obtenerId = this.activatedRoute.snapshot.paramMap.get('id');

      this.cruidService.getCita(this.obtenerId).subscribe(res => {
      this.atualizarForm.setValue({
        name: res['name'],
        date: res['date'],
        time: res['time'],
        description: res['description']
      });

      }); 

      this.atualizarForm = this.formBuilder.group({
        name: [''],
        date: [''],
        time: [''],
        description: ['']
      }) */
    }

  
  ngOnInit(): void {
  /*  const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.cruidService.getCita(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.cita = res;
        }, err => console.error(err)
      )
    }   */
  }

  /* /* onUpdateCita() {
    this.cruidService.updateCita(this.obtenerId, this.atualizarForm.value)
    .subscribe( () => {
        console.log(res); 
        this.router.navigate(['/list-citas']);
      }, err => console.error(err)
    )
   
  }  */
 

}
