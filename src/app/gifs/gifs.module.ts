import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsBuscarComponent } from './gifs-buscar/gifs-buscar.component';
import { GifsMainComponent } from './gifs-main/gifs-main.component';
import { GifsMostrarComponent } from './gifs-mostrar/gifs-mostrar.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    GifsBuscarComponent,
    GifsMainComponent,
    GifsMostrarComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [GifsMainComponent]
})
export class GifsModule { }
