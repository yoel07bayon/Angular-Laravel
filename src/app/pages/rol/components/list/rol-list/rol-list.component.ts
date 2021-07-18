import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rol} from '../../../models/rol';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.css']
})
export class RolListComponent implements OnInit {
  @Input() rols: Rol[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
  }

  public newRol(): void {
    this.onNew.emit(true);
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }

}
