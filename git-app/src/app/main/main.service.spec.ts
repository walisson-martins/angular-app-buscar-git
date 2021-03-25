/*
  Componente: MainService (Test).
  Funcionalidade: Arquivo responsável pelos teste de unidade com Jasmine e Karma (testes automatizados)
  Desenvolvedor: walisson.martins
*/
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { MainService } from './main.service';

describe('Teste de unidade do main service', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  // it('Testa se o service foi renderizado caso positivo retorna true', () => {
  //   expect(service).toBeTruthy();
  // });
});
