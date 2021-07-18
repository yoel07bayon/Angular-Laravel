import { Component, OnInit } from '@angular/core';
import {MatriculasService} from '../../../../../providers/matriculas/matriculas.service';
import {PeriodosService} from 'src/providers/periodos/periodos.service';
import { AlumnosService } from 'src/providers/Alumnos/alumnos.service';
import {Matricula} from '../../models/matricula';
import { Alumno } from 'src/app/pages/alumno/models/alumno';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Periodo} from '../../models/periodo';
import {MatriculaNewComponent} from '../../components/forms/matricula-new/matricula-new.component';



@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})


export class MatriculaComponent implements OnInit {
  error: string;
  alumnos: Alumno[];
  alumno: Alumno;

  periodos:Periodo[];

  constructor(private alumnoService : AlumnosService,
    private periodoService : PeriodosService,  private modalService: NgbModal, private matriculasService: MatriculasService) {

  }

  ngOnInit(): void {
    this.getAlumnos();
  }



  getAlumnos(): void{
    this.alumnoService.getAlumnosUsuarios().subscribe( response=>{
        this.alumnos = response.data;
        console.log(this.alumnos);
    }, error => {
      this.error = error;

    });
  }



  onNewMatricula(eventalumno: Alumno){
    console.log(eventalumno);
    this.periodoService.getPeriodos().subscribe( response=>{

      this.periodos = response.data;

      const productForm = this.modalService.open(MatriculaNewComponent, {size: 'lg'});
      productForm.componentInstance.title = 'Nuevo Matricula';
      productForm.componentInstance.alumno= eventalumno;
      productForm.componentInstance.periodos= this.periodos;
      productForm.result.then((result) => {
        console.log(result);
        this.matriculasService.postMatricula(result).subscribe(response => {
          //if (response.success) {
            console.log(response);
          //}
        }, error => {
          this.error = error;
        });

      });

    }, error => {
      this.error = error;

    });

      }

    }



