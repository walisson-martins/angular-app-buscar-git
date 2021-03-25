import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import da variável global de ambiente
import { environment } from '../../environments/environment';
//import da service que instancia o módulo HttpClient
import { MainService } from '../main/main.service';
//import do ModalComponent
import { ModalComponent } from './modal/modal.component';

//import dos módulos do ngrx
import { Store, select } from '@ngrx/store';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent  {
  constructor(
    private store: Store<{ repository$: any }>,
    private service: MainService,
    private dialog: MatDialog,
  ) {}

  public repository$: Observable<any>;
  public mensagemErro: boolean = false;
  public mensagemSucesso: boolean = false;
  public url: string = environment.apiBaseUrl;

  //método responsável pela requisição e tratamento da busca do usuário na Api do Github

 async buscarApi(event, usuario) {
    //observable $
    event.preventDefault();

    try {
     await this.service.buscar(usuario).subscribe(
        (response) => {
          console.log(response);
          this.repository$ = response;
          this.mensagemErro = false;
          this.mensagemSucesso = true;
        },
        (error) => ((this.mensagemErro = true), (this.repository$ = undefined))
      );
    } catch (e) {
      console.log(e);
    }
  }

  //método responsável por renderizar o modal com as informações do usuário

  modalInfo(dateUser) {
    this.dialog.open(ModalComponent, {
      width: '400px',
      height: '450px',
      data: dateUser,
    });
    console.log(dateUser);
  }
}
