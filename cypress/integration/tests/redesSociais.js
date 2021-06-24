/// <reference types="cypress" />

//Fabricio
import Buttons from '../../support/pages/buttons';
import CamposDeTextos from '../../support/pages/CamposDeTextos';
import redeSocial from '../../support/pages/redeSocial';
import validarTextos from '../../support/pages/validarTextos';

describe('Redes Sociais', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Twiiter', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    redeSocial.verficarTwitter();

  })
  it('Facebook', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    redeSocial.verficarFace();

  })
  it('LinkeDin', () =>{

    CamposDeTextos.loginUser();
    CamposDeTextos.loginPassword();
    Buttons.clicarLogin();
    redeSocial.verficarLinkeDin();

  })

})