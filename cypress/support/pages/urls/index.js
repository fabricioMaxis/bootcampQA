//**********Mapeamento de elementos**********
const el = {
  
//Urls

sauceLabs:'https://saucelabs.com/',
sauceHome:'https://www.saucedemo.com/',

}

//**********Ações**********
class Urls {

 urlSauceLabs(){
  cy.url()
  .should('be.equal', el.sauceLabs)
 }
 urlSauceHome(){
  cy.url()
  .should('be.equal', el.sauceHome)
 }
 
}

export default new Urls();