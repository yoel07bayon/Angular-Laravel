import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})

export class AlumnoListComponent implements OnInit {

  @Input() alumnos: Alumno[];

  constructor() { }

  ngOnInit(): void {
  }

}
