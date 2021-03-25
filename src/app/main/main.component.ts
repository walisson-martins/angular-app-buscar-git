import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import da variável global de ambiente
import { environment } from '../../environments/environment';
//import da service que instancia o módulo HttpClient
import { MainService } from '../main/main.service';
//import do ModalComponent
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private service: MainService, private dialog: MatDialog) {}
  repository: any;
  mensagemErro: boolean = false;
  url: string = environment.apiBaseUrl;

  //método responsável pela requisição e tratamento da busca do usuário na Api do Github

  buscarApi(event, usuario) {
    event.preventDefault();

    try {
      this.service.buscar(usuario).subscribe(
        (response) => {
          console.log(response);
          this.repository = response;
          this.mensagemErro = false;
        },
        (error) => ((this.mensagemErro = true), (this.repository = ''))
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
