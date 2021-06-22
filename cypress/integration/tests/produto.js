/// <reference types="cypress" />

//Fabricio
import Login from '../../support/pages/JornadaPage';

describe('Produtos', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Remover Produtos Carrinho', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.validarQtdItemCarrinho('not.exist');
    Login.clicarAddCartBackpack();
    Login.clicarAddCartBike();
    Login.validarQtdItemCarrinho('exist');
    Login.clicarRemoveBackpack();
    Login.clicarRemoveBike();
    Login.validarQtdItemCarrinho('not.exist');
   
  })
  it('Visualizar Detalhe Produto', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.clicarDetalhe();
    Login.validarDetalheInfo();
    Login.validarDetalhePreco();
    Login.clicarVoltarParaProdutos();
    
   
  })
  it.only('Adicionar Remover Tela YourCart', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.clicarCarrinhoButton();
    Login.validarTitle('Your Cart'); 
    Login.verficarCarrinho('exist');  //já verifica se os produtos estão sendo listado no carrinho
    Login.clicarRemoveBackpack();
    Login.verficarCarrinho('not.exist');
    Login.clicarContinueShopp();
    Login.clicarAddCartBackpack();
    Login.clicarCarrinhoButton();
    Login.verficarCarrinho('exist');  
   
  })
  it('Teste De Filtro', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarFiltroZA();
    Login.clicarFiltroAZ();
    Login.clicarFiltroLoHi();
    Login.clicarFiltroHiLo();
   
  })

  it('Verificar se produto é removido da listagem do carrinho', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.clicarAddCartBike(); 
    Login.clicarRemoveBackpack();
    Login.clicarRemoveBike();
    Login.clicarCarrinhoButton(); 
    Login.verficarCarrinho('not.exist');
    
   
  })

})