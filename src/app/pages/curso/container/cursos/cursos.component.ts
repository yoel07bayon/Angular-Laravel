import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import {CursosService} from 'src/providers/cursos/cursos.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CursoNewComponent} from '../../components/forms/curso-new/curso-new.component';
import {CursoEditComponent} from '../../components/forms/curso-edit/curso-edit.component';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  error: string;
  cursos: Curso[];
  curso: Curso;

  constructor(private cursoService: CursosService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCurso().subscribe(response => {
      this.cursos = response.data;
      console.log(this.cursos);
    }, error => {
      this.error = error;
    });
  }

  public onNewProduct($event): void {
    if ($event) {
      const cursoForm = this.modalService.open(CursoNewComponent, {size: 'lg'});
      cursoForm.componentInstance.title = 'Nuevo Producto';
      cursoForm.result.then((result) => {
        this.cursoService.postCurso(result).subscribe(response => {
          if (response.success) {
            this.getCursos();
          }
        }, error => {
          this.error = error;
        });

      });
    }
  }

  public delete(id: number): void {
    this.cursoService.deleteCurso(id).subscribe(response => {
      if (response.success) {
        this.getCursos();
      }
    }, error => {
      this.error = error;
    });
  }

  edit(id: number): void {
    this.cursoService.getCursoById(id).subscribe(response => {
      this.curso = response.data;

      const productForm = this.modalService.open(CursoEditComponent, {size: 'lg'});
      productForm.componentInstance.title = 'Editar Producto';
      productForm.componentInstance.product = this.curso;
      productForm.result.then((result) => {
        if (result) {
          this.cursoService.updateCurso(this.curso.id, result).subscribe(resp => {
            if (resp.success) {
              this.getCursos();
            }
          }, error => {
            this.error = error;
          });
        }
        console.log(result);
      });

    }, error => {
      this.error = error;
    });
  }

}
