/// <reference types="cypress" />

//Fabricio
import Login from '../../support/pages/JornadaPage';

describe('Teste Menu', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Verificar Elementos Menu', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarMenu();
    Login.verifAllItems();
    Login.verifAbout();
    Login.verifLogout();
    Login.verifReset();
    
    
  })

  it.only('Verificar Elemento Menu - About', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarMenu();
    Login.clicarAbout();
    Login.urlSauceLabs();
   
 
    
    
  })
    
    
});