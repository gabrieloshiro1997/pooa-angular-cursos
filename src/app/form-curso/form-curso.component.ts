import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css'],
})
export class FormCursoComponent {
  @Output() adicionarCurso = new EventEmitter();

  adicionar(nome, cargaHoraria) {
    this.adicionarCurso.emit({ nome, cargaHoraria });
  }
}
