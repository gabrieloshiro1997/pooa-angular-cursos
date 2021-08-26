import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ListaCursoComponent,
    FormCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
