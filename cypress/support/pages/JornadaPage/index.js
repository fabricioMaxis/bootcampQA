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

 validarQtdItemCarrinho(){
  cy.get(el.QtdItem);
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
 

}

export default new Login();