/// <reference types="cypress" />

//Fabricio

import Buttons from '../../support/pages/buttons';
import CamposDeTextos from '../../support/pages/CamposDeTextos';
import Login from '../../support/pages/CamposDeTextos';
import validarTextos from '../../support/pages/validarTextos';

describe('Login com falhas', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Login Sem Preencher Campos', () =>{
 
    Buttons.clicarLogin();
    validarTextos.validarErrorMsg(CamposDeTextos.errorMessageUsername);
 
  })
  
  it('Login Sem Preencher Password', () =>{

    CamposDeTextos.loginUser();
    Buttons.clicarLogin();
    validarTextos.validarErrorMsg(CamposDeTextos.errorMessagePassword);
 
  })
  it('Login Sem Preencher Usuario', () =>{

    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    validarTextos.validarErrorMsg(CamposDeTextos.errorMessageUsername)
 
  })
  it('Login Usuario Sem Cadastro', () =>{

   CamposDeTextos.loginUserIncorreto();
   Buttons.clicarLogin();
    validarTextos.validarErrorMsg(CamposDeTextos.ErrorMessageEmptyFields);
 
  })
  
  

    
   

  
    
});