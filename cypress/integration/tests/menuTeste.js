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

  it('Verificar Elemento Menu - About', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarMenu();
    Login.clicarAbout();
    Login.urlSauceLabs();
    
  })

  it('Verificar Elemento Menu - All Items', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarMenu();
    Login.clicarAbout();
    Login.urlSauceLabs();
    
  })

  it.only('Verificar Elemento Menu - Logout', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarMenu();
    Login.clicarLogout();
    Login.urlSauceHome();
    
  })

  it('Verificar Elemento Menu - Reset', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.clicarMenu();
    Login.clicarAbout();
    Login.urlSauceLabs();
    
  })

  
    
    
});