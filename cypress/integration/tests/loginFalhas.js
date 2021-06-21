/// <reference types="cypress" />

//Fabricio

import Login from '../../support/pages/JornadaPage';

describe('hometests', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('LoginSemPreencherCampos', () =>{
 
    Login.clicarLogin();
    Login.validarErrorMsg(('Epic sadface: Username is required'));
 
  })
  
  it('LoginSemPreencherPassword', () =>{

    Login.loginUser();
    Login.clicarLogin();
    Login.validarErrorMsg('Epic sadface: Password is required');
 
  })
  it('LoginSemPreencherUsuario', () =>{

    Login.loginPassword();
    Login.clicarLogin();
    Login.validarErrorMsg('Epic sadface: Username is required')
 
  })
  it('LoginUsuarioSemCadastro', () =>{

   Login.loginUserIncorreto();
    Login.clicarLogin();
    Login.validarErrorMsg('Epic sadface: Username and password do not match any user in this service');
 
  })
  
  

    
   

  
    
});