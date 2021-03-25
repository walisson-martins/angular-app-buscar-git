import { Injectable } from '@angular/core';

/* Import do módulo HttpClient nativo do Angular para tratar requisições assincronas*/
import { HttpClient, HttpParams } from '@angular/common/http';

/* Import do Observable para tratar requisições assincronas de forma unidirecional */
import { Observable } from 'rxjs';

/* Import do variável global para centralizar o endereço da Api*/
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}
  urlGlobal: string = environment.apiBaseUrl;

  //Método que contém a requisição do tipo Get para buscar os dados do usuário dentro da Api do github..

  buscar(url): Observable<any> {
    return this.http.get<any>(this.urlGlobal + url + '/repos');
  }
}
