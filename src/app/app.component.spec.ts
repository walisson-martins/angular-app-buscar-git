/*
  Componente: AppComponent (Test).
  Funcionalidade: Arquivo responsável pelos teste de unidade com Jasmine e Karma (testes automatizados)
  Desenvolvedor: walisson.martins
*/
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('O componente app.component ', () => {
  it('Teste responsável por verificar se o componente foi devidamente criado', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`Teste responsável por verificar se o título passado no title contém 'git-app' 'git-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('git-app');
  // });

  // it('Teste responsável por verificar se o title foi devidamente renderizado', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain(
  //     'git-app app is running!'
  //   );
  // });
});
