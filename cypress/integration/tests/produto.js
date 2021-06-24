/// <reference types="cypress" />

//Fabricio
import Buttons from '../../support/pages/buttons';
import CamposDeTextos from '../../support/pages/CamposDeTextos';
import Login from '../../support/pages/CamposDeTextos';
import validarTextos from '../../support/pages/validarTextos';

describe('Produtos', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Remover Produtos Carrinho', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    validarTextos.validarQtdItemCarrinho('not.exist');
    Buttons.clicarAddCartBackpack();
    Buttons.clicarAddCartBike();
    validarTextos.validarQtdItemCarrinho('exist');
    Buttons.clicarRemoveBackpack();
    Buttons.clicarRemoveBike();
    validarTextos.validarQtdItemCarrinho('not.exist');
   
  })
  it('Visualizar Detalhe Produto', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarAddCartBackpack();
    Buttons.clicarDetalhe();
    validarTextos.validarDetalheInfo();
    validarTextos.validarDetalhePreco();
    Buttons.clicarVoltarParaProdutos();
    
   
  })
  it('Adicionar Remover Tela YourCart', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarAddCartBackpack();
    Buttons.clicarCarrinhoButton();
    validarTextos.validarTitle('Your Cart'); 
    validarTextos.verficarCarrinho('exist');  //já verifica se os produtos estão sendo listado no carrinho
    Buttons.clicarRemoveBackpack();
    validarTextos.verficarCarrinho('not.exist');
    Buttons.clicarContinueShopp();
    Buttons.clicarAddCartBackpack();
    Buttons.clicarCarrinhoButton();
    validarTextos.verficarCarrinho('exist');  
   
  })
  it('Teste De Filtro', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarFiltroZA();
    Buttons.clicarFiltroAZ();
    Buttons.clicarFiltroLoHi();
    Buttons.clicarFiltroHiLo();
   
  })

  it('Verificar se produto é removido da listagem do carrinho', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarAddCartBackpack();
    Buttons.clicarAddCartBike(); 
    Buttons.clicarRemoveBackpack();
    Buttons.clicarRemoveBike();
    Buttons.clicarCarrinhoButton(); 
    validarTextos.verficarCarrinho('not.exist');
    
   
  })

})