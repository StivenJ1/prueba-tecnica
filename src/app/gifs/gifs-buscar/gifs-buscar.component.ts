import { Component, OnInit } from '@angular/core';
import { ServiciosGifsService } from 'src/app/servicios/servicios-gifs.service';


@Component({
  selector: 'app-gifs-buscar',
  templateUrl: './gifs-buscar.component.html',
  styleUrls: ['./gifs-buscar.component.css']
})
export class GifsBuscarComponent implements OnInit {

  constructor(private  gifsService: ServiciosGifsService) {

  }

  ngOnInit(): void {

  }

  buscar(valor:string){
    this.gifsService.buscarGifs(valor);
  }
}

