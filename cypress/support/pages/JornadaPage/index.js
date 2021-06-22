//**********Mapeamento de elementos**********
const el = {

  //Campo de texto
  tfNome: '[data-test=username]', 
  tfFirstName: '[data-test=firstName]', 
  tfLastName: '[data-test=lastName]',
  tfZipCode: '[data-test=postalCode]',  
  tfPassword: '[data-test=password]',
  
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

//textos
txtBackpack:'#item_4_title_link > .inventory_item_name',
txtBike:'#item_0_title_link > .inventory_item_name',
txtInfoPagamento:'.summary_info > :nth-child(1)',
txtInfoEnvio:'.summary_info > :nth-child(3)',
txtTotalValor:'summary_total_label',
txtSucesso:'.complete-header',
txtEnvioSucesso:'.complete-text',
QtdItem:'.shopping_cart_badge',
txtError:'[data-test=error]',
txtDetalheInfoInvetorio:'.inventory_details_desc',
txtDetalhePrecoInvetorio:'.inventory_details_price',
txtTitle:'.title',
txtAllItems:'#inventory_sidebar_link',
txtAbout:'#about_sidebar_link',
txtLogout:'#logout_sidebar_link',
txtReset:'#reset_sidebar_link',


//Verificar Rede Sociais

verifTwitter:'.social_twitter > a',
verifFace:'.social_facebook > a',
verifLinkeDin:'.social_linkedin > a',

    
//Urls

sauceLabs:'https://saucelabs.com/',
sauceHome:'https://www.saucedemo.com/',

//Verifica se  elementos está no carrinho
elementVerificar:'.cart_quantity',

}

//**********Ações**********
class Login {

loginUser(){
  cy.get(el.tfNome).type('standard_user')
}

loginPassword(){  
  cy.get(el.tfPassword).type('secret_sauce')
}

loginUserIncorreto(){
  cy.get(el.tfNome).type('Fabricio')
  cy.get(el.tfPassword).type('Maxis')
}

 clicarLogin(){
  cy.get(el.btLogin).click({force:true});
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

 validarQtdItemCarrinho(info){
  cy.get(el.elementBadge,{timeout: 3000}).should(info);
 }

 validarItemBackpackNoCarrinho(){
  cy.get(el.txtBackpack);
 }

 validarItemBikeNoCarrinho(){
  cy.get(el.txtBike);
 }

 clicarCheckoutButton(){
  cy.get(el.btCheckout).click({force:true});
 }

 checkoutForms(){
  cy.get(el.tfFirstName).type('Maxis')
  cy.get(el.tfLastName).type('Crow')
  cy.get(el.tfZipCode).type('33400000')
}

clicarContinue(){
  cy.get(el.btContinue).click({force:true});
 }

 validarInfoPagamento(){
  cy.get(el.txtInfoPagamento);
 }

 validarInfoEnvio(){
  cy.get(el.txtInfoEnvio);
 }

 validarTotalValor(){
  cy.get(el.txtTotalValor);
 }

 clicarFinalizar(){
  cy.get(el.btFinalizar).click({force:true});
 }

 validarCompraSucesso(){
  cy.get(el.txtSucesso);
 }

 validarCompraEnvio(){
  cy.get(el.txtEnvioSucesso);
 }

 validarErrorMsg(message){
  cy.get(el.txtError).should('have.text', message);
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

 validarDetalheInfo(){
  cy.get(el.txtDetalheInfoInvetorio)
 }
 validarDetalhePreco(){
  cy.get(el.txtDetalhePrecoInvetorio)
 }

 clicarVoltarParaProdutos(){
  cy.get(el.btVoltarParaProdutos).click({force:true});
 }
 clicarContinueShopp(){
  cy.get(el.btContinueShopping).click({force:true});
 }

 validarTitle(message){
   cy.get(el.txtTitle).should('have.text',message);
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

 verficarCarrinho(info){
  cy.get(el.elementVerificar,{timeout: 3000}).should(info);
 }

 verficarBadgeCarrinho(info){
  cy.get(el.elementBadge,{timeout: 3000}).should(info);
 }

 verficarTwitter(){
  cy.get(el.verifTwitter).should('have.attr', 'href', 'https://twitter.com/saucelabs')
 }

 verficarFace(){
  cy.get(el.verifFace).should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
 }

 verficarLinkeDin(){
  cy.get(el.verifLinkeDin).should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
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

 verifAllItems(){
  cy.get(el.txtAllItems)
 }

 verifAbout(){
  cy.get(el.txtAbout)
 }
verifLogout(){
  cy.get(el.txtLogout)
 }

 verifReset(){
  cy.get(el.txtReset)
 }

 urlSauceLabs(){
  cy.url()
  .should('be.equal', el.sauceLabs)
 }
 urlSauceHome(){
  cy.url()
  .should('be.equal', el.sauceHome)
 }
 
}

export default new Login();