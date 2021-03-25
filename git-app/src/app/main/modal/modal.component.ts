/*
  Componente: Modal (Typescript).
  Funcionalidade: Arquivo que contém a construção do component ModalComponent através da injeção pelo constructor injetando os dados do repository
  Desenvolvedor: walisson.martins
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'modal-detalhe',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public repository: any
  ) {}

  ngOnInit(): void {}

}
