/// <reference types="cypress" />

//Fabricio
import Buttons from '../../support/pages/buttons';
import CamposDeTextos from '../../support/pages/CamposDeTextos';
import Login from '../../support/pages/CamposDeTextos';
import validarTextos from '../../support/pages/validarTextos';

describe('Checkout', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Checkout Mensagem de Erro Primeiro Nome', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    validarTextos.validarTitle('Products');
    validarTextos.clicarAddCartBackpack();
    Buttons.clicarAddCartBike();
    validarTextos.validarQtdItemCarrinho('exist');
    Buttons.clicarCarrinhoButton();
    validarTextos.validarTitle('Your Cart');
    validarTextos.validarItemBackpackNoCarrinho();
    validarTextos.validarItemBikeNoCarrinho();
    Buttons.clicarCheckoutButton();
    validarTextos.validarTitle('Checkout: Your Information');
    CamposDeTextos.checkoutFormsLastName('Crow');
    CamposDeTextos.checkoutFormsZipCode('33400000');
    Buttons.clicarContinue();
    validarTextos.validarErrorMsg(Login.ErrorMessageFirstName);
    
  })

  it('Checkout Mensagem de Erro Ultimo Nome', () =>{

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
    CamposDeTextos.checkoutFormsZipCode('33400000')
    Buttons.clicarContinue();
    validarTextos.validarErrorMsg(Login.ErrorMessageLastName);
    
  })

  it('Checkout Mensagem de Erro Postal Code', () =>{

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
    Buttons.clicarContinue();
    validarTextos.validarErrorMsg(Login.ErrorMessagePostalCode);
    
  })

  it('Checkout fechar Mensagem de Error', () =>{

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
    Buttons.clicarContinue();
    Buttons.clicarError();
    
  })
    
});