/// <reference types="cypress" />

//Fabricio
import Buttons from '../../support/pages/buttons';
import CamposDeTextos from '../../support/pages/CamposDeTextos';
import Login from '../../support/pages/CamposDeTextos';
import validarTextos from '../../support/pages/validarTextos';

describe('Jornada com Sucesso', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Jornada Sucesso', () =>{

    CamposDeTextos.LimparCamposLogin();
    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    validarTextos.validarTitle('Products');
    Buttons.clicarAddCartBackpack();
    Buttons.clicarAddCartBike();
    validarTextos.validarQtdItemCarrinho('exist');
    Buttons.clicarCarrinhoButton();
    validarTextos.validarTitle('Your Cart');
    validarTextos.validarItemBackpackNoCarrinho();
    validarTextos.validarItemBikeNoCarrinho();
    Buttons.clicarCheckoutButton();
    validarTextos.validarTitle('Checkout: Your Information');
    CamposDeTextos.checkoutFormsName('Maxis');
    CamposDeTextos.checkoutFormsLastName('Crow');
    CamposDeTextos.checkoutFormsZipCode('33400000');
    Buttons.clicarContinue();
    Buttons.clicarFinalizar();
    validarTextos.validarTitle('Checkout: Complete!');
    validarTextos.validarCompraSucesso();
    validarTextos.validarCompraSucesso();
    validarTextos.validarQtdItemCarrinho('not.exist');
    Buttons.clicarBackToHome();
    validarTextos.validarTitle('Products');
    
  })
    
});