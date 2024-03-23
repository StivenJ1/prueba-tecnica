import { Component, OnInit } from '@angular/core';
import { ServiciosGifsService } from 'src/app/servicios/servicios-gifs.service';

@Component({
  selector: 'app-gifs-mostrar',
  templateUrl: './gifs-mostrar.component.html',
  styleUrls: ['./gifs-mostrar.component.css']
})
export class GifsMostrarComponent implements OnInit {
  constructor(private gifService: ServiciosGifsService){}

  ngOnInit(): void {

  }

  get Resultados(){
    return this.gifService.resultados;
  }
}
