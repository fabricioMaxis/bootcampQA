/// <reference types="cypress" />

//Fabricio
import Login from '../../support/pages/JornadaPage';

describe('Redes Sociais', () => {
  beforeEach(()=>{
    
    cy.visit('https://saucedemo.com');
    
      
  })

  afterEach(()=>{

  })

  it('Twiiter', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.verficarTwitter();

  })
  it('Facebook', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.verficarFace();

  })
  it('LinkeDin', () =>{

    Login.loginUser();
    Login.loginPassword();
    Login.clicarLogin();
    Login.verficarLinkeDin();

  })

})