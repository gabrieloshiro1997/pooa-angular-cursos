import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css'],
})
export class ListaCursoComponent {
  cursos = [
    {
      nome: 'Docker: Ferramenta essencial para Desenvolvedores',
      cargaHoraria: 40,
    },
    {
      nome: 'NodeJs Avançado com TDD, Clean Architecture e Typescript',
      cargaHoraria: 60,
    },
    { nome: 'Next.js e React - Curso Completo 2021', cargaHoraria: 50 },
  ];
}
