/// <reference types="cypress" />

//Fabricio
import Login from '../../support/pages/JornadaPage';

describe('hometests', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('RemoverProdutosCarrinho', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.validarQtdItemCarrinho();
    Login.clicarAddCartBike();
    Login.clicarRemoveBackpack();
    Login.clicarRemoveBike();
   
  })
  it('VisualizarDetalheProduto', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.clicarDetalhe();
    Login.validarDetalheInfo();
    Login.validarDetalhePreco();
    Login.clicarVoltarParaProdutos();
    
   
  })
  it('AdicionarRemoverTelaYourCart', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.clicarAddCartBike();
    Login.clicarCarrinhoButton();
    Login.validarTitle('Your Cart');
    Login.clicarRemoveBackpack();
    Login.clicarContinueShopp();
    Login.clicarAddCartBackpack();
    Login.clicarCarrinhoButton();
   
  })

})