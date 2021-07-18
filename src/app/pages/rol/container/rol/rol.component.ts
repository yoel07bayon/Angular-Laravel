import { Component, OnInit } from '@angular/core';
import {RolsService} from '../../../../../providers/rols/rols.service';
import {Rol} from '../../models/rol';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RolNewComponent} from '../../components/forms/rol-new/rol-new.component';
import {RolEditComponent} from '../../components/forms/rol-edit/rol-edit.component';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  error: string;
  rols: Rol[];
  rol: Rol;

  constructor(private rolService: RolsService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getRols();
  }

  getRols(): void {
    this.rolService.getRol().subscribe(response => {
      this.rols = response.data;
      console.log(this.rols);
    }, error => {
      this.error = error;
    });
  }

  public onNewRol ($event): void {
    if ($event) {
      const rolForm = this.modalService.open(RolNewComponent, {size: 'lg'});
      rolForm.componentInstance.title = 'Nuevo Rol';
      rolForm.result.then((result) => {
        this.rolService.postRol(result).subscribe(response => {
          if (response.success) {
            this.getRols();
          }
        }, error => {
          this.error = error;
        });

      });
    }
  }

  public delete(id: number): void {
    this.rolService.deleteRol(id).subscribe(response => {
      if (response.success) {
        this.getRols();
      }
    }, error => {
      this.error = error;
    });
  }


  edit(id: number): void {
    this.rolService.getRolById(id).subscribe(response => {
      this.rol = response.data;

      const rolForm = this.modalService.open(RolEditComponent, {size: 'lg'});
      rolForm.componentInstance.title = 'Editar Rol';
      rolForm.componentInstance.rol = this.rol;
      rolForm.result.then((result) => {
        if (result) {
          this.rolService.updateRol(this.rol.id, result).subscribe(resp => {
            if (resp.success) {
              this.getRols();
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
