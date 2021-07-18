import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Matricula} from '../../../models/matricula';

@Component({
  selector: 'app-matricula-edit',
  templateUrl: './matricula-edit.component.html',
  styleUrls: ['./matricula-edit.component.css']
})
export class MatriculaEditComponent implements OnInit {
  @Input() matricula: Matricula;
  @Input() title: string;
  matriculaForm: FormGroup;


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.matriculaForm = this.formBuilder.group({
      state: [''],
      inscription: ['']

    });
  }

  ngOnInit(): void {
    if (this.matricula) {
      this.matriculaForm.patchValue({
        state: this.matricula.confirmacion,
        inscription: this.matricula.confirmacion
      });
    }

  }

  public edit(): void {
    if (this.matriculaForm.valid) {
      this.activeModal.close(this.matriculaForm.value);
    }

  }

}
