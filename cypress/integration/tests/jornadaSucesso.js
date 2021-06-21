/// <reference types="cypress" />

//Fabricio
import Login from '../../support/pages/JornadaPage';

describe('hometests', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('JornadaSucesso', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarAddCartBackpack();
    Login.clicarAddCartBike();
    Login.validarQtdItemCarrinho();
    Login.clicarCarrinhoButton();
    Login.validarItemBackpackNoCarrinho();
    Login.validarItemBikeNoCarrinho();
    Login.clicarCheckoutButton();
    Login.checkoutForms();
    Login.clicarContinue();
    Login.clicarFinalizar();
    Login.validarCompraSucesso();
    Login.validarCompraSucesso();
  })
  
  
  

    
   

  
    
});