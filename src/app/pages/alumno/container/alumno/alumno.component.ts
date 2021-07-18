import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnosService } from 'src/providers/Alumnos/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  error: string;
  alumnos: Alumno;
  alumno: Alumno;


  constructor(private alumnoService : AlumnosService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnosUsuarios().subscribe(response => {
      this.alumnos = response.data;
      console.log(this.alumnos);
    }, error => {
      this.error = error;
    });
  }

}
