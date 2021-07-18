import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Alumno } from 'src/app/pages/alumno/models/alumno';


@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrls: ['./matricula-list.component.css']
})
export class MatriculaListComponent implements OnInit {
  @Input() alumnos: Alumno[];
  @Output() onNew: EventEmitter<object> = new EventEmitter();

  constructor() {

   }


  ngOnInit(): void {
  }

  public matricular(alumno : Alumno): void {
    this.onNew.emit(alumno);
    //console.log(alumno);
  }

}
