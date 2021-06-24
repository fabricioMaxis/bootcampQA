//**********Mapeamento de elementos**********
const el = {

//Verificar Rede Sociais

verifTwitter:'.social_twitter > a',
verifFace:'.social_facebook > a',
verifLinkeDin:'.social_linkedin > a',

}

//**********Ações**********
class RedeSocial {


 verficarTwitter(){
  cy.get(el.verifTwitter).should('have.attr', 'href', 'https://twitter.com/saucelabs')
 }

 verficarFace(){
  cy.get(el.verifFace).should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
 }

 verficarLinkeDin(){
  cy.get(el.verifLinkeDin).should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
 }

}

export default new RedeSocial();