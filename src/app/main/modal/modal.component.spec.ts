/*
  Componente: Modal (Test).
  Funcionalidade: Arquivo responsável pelos teste de unidade com Jasmine e Karma (testes automatizados)
  Desenvolvedor: walisson.martins
*/

import { ModalComponent } from './modal.component';

describe('O construtor do modal component deve ser injetado com dois paramêtros', () => {
  let dialog;
  let repository;

  it('deve ser instanciado', () => {
    const modal = new ModalComponent(dialog, repository);
    expect(modal).toBeTruthy();
  });

  it('Testa se o objeto modal é igual ao paramêtro esperado ', () => {
    const modal = new ModalComponent(dialog, repository);
    expect(modal).toEqual(modal);
  });
});
