/// <reference types="cypress" />

//Fabricio
import Buttons from '../../support/pages/buttons';
import CamposDeTextos from '../../support/pages/CamposDeTextos';
import Urls from '../../support/pages/urls';

describe('Teste Menu', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Verificar Elementos Menu', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarMenu();
    CamposDeTextos.verifAllItems();
    CamposDeTextos.verifAbout();
    CamposDeTextos.verifLogout();
    CamposDeTextos.verifReset();
    
    
  })

  it('Verificar Elemento Menu - About', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarMenu();
    Buttons.clicarAbout();
    Urls.urlSauceLabs();
    
  })

  it('Verificar Elemento Menu - All Items', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarMenu();
    Buttons.clicarAbout();
    Urls.urlSauceLabs();
    
  })

  it('Verificar Elemento Menu - Logout', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarMenu();
    Buttons.clicarLogout();
    Urls.urlSauceHome();
    
  })

  it('Verificar Elemento Menu - Reset', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    Buttons.clicarMenu();
    Buttons.clicarAbout();
    Urls.urlSauceLabs();
    
  })

  
    
    
});