import { Gif } from './../interfaces/interfaz.gifs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BuscarGifs } from '../interfaces/interfaz.gifs';


const URL = environment.url;
const API_KEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class ServiciosGifsService {

  resultados:Gif[]=[];

  constructor(private http :HttpClient) { }

   buscarGifs(query: string){
    const params = new HttpParams().set('api_key',API_KEY).set('q',query).set('limit',15);
    this.http.get<BuscarGifs>(`${URL}`, {params}).subscribe
    (response => {
      this.resultados = response.data;

      console.log(this.resultados);
    })
  }
}
