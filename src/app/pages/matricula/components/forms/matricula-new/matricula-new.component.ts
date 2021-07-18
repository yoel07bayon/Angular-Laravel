import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Alumno } from 'src/app/pages/alumno/models/alumno';
import { Periodo } from '../../../models/periodo';


@Component({
  selector: 'app-matricula-new',
  templateUrl: './matricula-new.component.html',
  styleUrls: ['./matricula-new.component.css']
})


export class MatriculaNewComponent implements OnInit {
  //matriculaForm: FormGroup;
  @Input() title: string;
  materiaForm: FormGroup;
  @Input() alumno: Alumno;
  @Input() periodos: Periodo[];
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.materiaForm = this.formBuilder.group({




  alumno_id: ['', [Validators.required]],
  cod_alumno: ['' ],
  user_id: [''],
  appaterno: [''],
  apmaterno: [''],
  name: ['' ],
  nivel: ['' ],
  grado: ['' ],
  representante_id: ['' ],
  periodo_id: ['', [Validators.required]],

});
}
ngOnInit(): void {
if(this.alumno){
  this.materiaForm.patchValue({
    alumno_id:this.alumno.id,

    appaterno:this.alumno.appaterno,
    apmaterno:this.alumno.apmaterno,

  })

}
}

public save(): void {
console.log(this.materiaForm.value);
if (this.materiaForm.valid) {
  this.activeModal.close(this.materiaForm.value);
}

  }

}
