/// <reference types="cypress" />

//Fabricio

import Login from '../../support/pages/JornadaPage';

describe('Login com falhas', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Login Sem Preencher Campos', () =>{
 
    Login.clicarLogin();
    Login.validarErrorMsg(('Epic sadface: Username is required'));
 
  })
  
  it('Login Sem Preencher Password', () =>{

    Login.loginUser();
    Login.clicarLogin();
    Login.validarErrorMsg('Epic sadface: Password is required');
 
  })
  it('Login Sem Preencher Usuario', () =>{

    Login.loginPassword();
    Login.clicarLogin();
    Login.validarErrorMsg('Epic sadface: Username is required')
 
  })
  it('Login Usuario Sem Cadastro', () =>{

   Login.loginUserIncorreto();
    Login.clicarLogin();
    Login.validarErrorMsg('Epic sadface: Username and password do not match any user in this service');
 
  })
  
  

    
   

  
    
});