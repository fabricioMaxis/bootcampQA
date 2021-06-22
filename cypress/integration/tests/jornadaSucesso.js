/// <reference types="cypress" />

//Fabricio
import Login from '../../support/pages/JornadaPage';

describe('Jornada com Sucesso', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Jornada Sucesso', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.validarTitle('Products');
    Login.clicarAddCartBackpack();
    Login.clicarAddCartBike();
    Login.validarQtdItemCarrinho('exist');
    Login.clicarCarrinhoButton();
    Login.validarTitle('Your Cart');
    Login.validarItemBackpackNoCarrinho();
    Login.validarItemBikeNoCarrinho();
    Login.clicarCheckoutButton();
    Login.validarTitle('Checkout: Your Information');
    Login.checkoutForms();
    Login.clicarContinue();
    Login.clicarFinalizar();
    Login.validarTitle('Checkout: Complete!');
    Login.validarCompraSucesso();
    Login.validarCompraSucesso();
    Login.clicarBackToHome();
    Login.validarTitle('Products');
    
  })
    
});