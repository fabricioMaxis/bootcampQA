//**********Mapeamento de elementos**********
const el = {

  
  //Botoes
  btLogin:'[data-test=login-button]',
  btAddCartBackpack:'[data-test=add-to-cart-sauce-labs-backpack]',
  btAddCartBike:'[data-test=add-to-cart-sauce-labs-bike-light]',
  btCarrinho:'.shopping_cart_link',
  btCheckout:'[data-test=checkout]',
  btContinue:'[data-test=continue]',
  btFinalizar:'[data-test=finish]',
  btRemoveBackpack:'[data-test=remove-sauce-labs-backpack]',
  btRemoveBike:'[data-test=remove-sauce-labs-bike-light]',
  btDetalhe:'#item_4_title_link > .inventory_item_name',
  btVoltarParaProdutos:'[data-test=back-to-products]',
  btContinueShopping:'[data-test=continue-shopping]',
  btBackHome:'[data-test=back-to-products]',
  btFiltroAZ:'.product_sort_container',
  btFiltroZA:'.product_sort_container',
  btFiltroLoHi:'.product_sort_container',
  btFiltroHiLo:'.product_sort_container',
  btMenu:'#react-burger-menu-btn',
  btAllItems:'#inventory_sidebar_link',
  btAbout:'#about_sidebar_link',
  btLogout:'#logout_sidebar_link',
  btReset:'#reset_sidebar_link',
  btError:'.error-button',


}

//**********Ações**********
class Buttons {

 clicarLogin(){
  cy.get(el.btLogin).click({force:true});
 }

 clicarError(){
  cy.get(el.btError).click({force:true});
 }

 clicarAddCartBackpack(){
  cy.get(el.btAddCartBackpack).click({force:true});
 }

 clicarAddCartBike(){
  cy.get(el.btAddCartBike).click({force:true});
 }

 clicarCarrinhoButton(){
  cy.get(el.btCarrinho).click({force:true});
 }

 clicarCheckoutButton(){
  cy.get(el.btCheckout).click({force:true});
 }

 checkoutFormsName(info){
  cy.get(el.tfFirstName).type(info)
}

checkoutFormsLastName(info){
  cy.get(el.tfLastName).type(info)
}

clicarContinue(){
  cy.get(el.btContinue).click({force:true});
 }

 clicarFinalizar(){
  cy.get(el.btFinalizar).click({force:true});
 }
 
 clicarRemoveBackpack(){
  cy.get(el.btRemoveBackpack).click({force:true});
 }

 clicarRemoveBike(){
  cy.get(el.btRemoveBike).click({force:true});
 }

 clicarDetalhe(){
  cy.get(el.btDetalhe).click({force:true});
 }

 clicarVoltarParaProdutos(){
  cy.get(el.btVoltarParaProdutos).click({force:true});
 }
 clicarContinueShopp(){
  cy.get(el.btContinueShopping).click({force:true});
 }

 clicarBackToHome(){
  cy.get(el.btBackHome).click({force:true});
 }

 clicarFiltroAZ(){
  cy.get(el.btFiltroAZ).select('az');
 }

 clicarFiltroZA(){
  cy.get(el.btFiltroZA).select('za');
 }

 clicarFiltroLoHi(){
  cy.get(el.btFiltroLoHi).select('lohi');
 }

 clicarFiltroHiLo(){
  cy.get(el.btFiltroHiLo).select('hilo');
 }

 clicarMenu(){
  cy.get(el.btMenu).click({force:true});
 }

 clicarAllItems(){
  cy.get(el.btAllItems).click({force:true});
 }

 clicarAbout(){
  cy.get(el.btAbout).click({force:true});
 }

 clicarLogout(){
  cy.get(el.btLogout).click({force:true});
 }

 clicarReset(){
  cy.get(el.btReset).click({force:true});
 }

 
}

export default new Buttons();