/*
  Componente: Main (Test).
  Funcionalidade: Arquivo responsável pelos teste de unidade com Jasmine e Karma (testes automatizados)
  Desenvolvedor: walisson.martins
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ModalComponent } from './modal/modal.component';

describe('Teste de unidade do main component ', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(function(done) {
    setTimeout(function() {
      try {
        ModalComponent;
        done();
      } catch (e) {
        done.fail(e);
      }
    });
  });

  // it('Testa se o component main component foi rendizado com sucesso', () => {
  //   expect(component).toBeTruthy();
  // });
});
