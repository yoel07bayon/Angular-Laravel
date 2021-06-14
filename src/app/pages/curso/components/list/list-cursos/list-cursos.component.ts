import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit {
  @Input() cursos: Curso[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public newCurso(): void {
    this.onNew.emit(true);
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }
}


