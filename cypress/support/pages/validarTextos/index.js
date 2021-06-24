//**********Mapeamento de elementos**********
const el = {

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
  txtErrorMessageUsername:'Epic sadface: Username is required',
  txtErrorMessagePassword:'Epic sadface: Password is required',
  txtErrorMessageEmptyFields:'Epic sadface: Username and password do not match any user in this service',
  txtErrorMessageFirstName:'Error: First Name is required',
  txtErrorMessageLastName:'Error: Last Name is required',
  txtErrorMessagePostalCode:'Error: Postal Code is required',

  //Verifica se  elementos está no carrinho
elementVerificar:'.cart_quantity',

  
  }
  
  //**********Ações**********
  class Validar {
  
   validarQtdItemCarrinho(info){
    cy.get(el.QtdItem,{timeout: 3000}).should(info);
   }
  
   validarItemBackpackNoCarrinho(){
    cy.get(el.txtBackpack);
   }
  
   validarItemBikeNoCarrinho(){
    cy.get(el.txtBike);
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
  
   validarCompraSucesso(){
    cy.get(el.txtSucesso);
   }
  
   validarCompraEnvio(){
    cy.get(el.txtEnvioSucesso);
   }
  
   validarErrorMsg(message){
    cy.get(el.txtError).should('have.text', message());
   }
  
   validarDetalheInfo(){
    cy.get(el.txtDetalheInfoInvetorio)
   }
   validarDetalhePreco(){
    cy.get(el.txtDetalhePrecoInvetorio)
   }
  
   validarTitle(message){
     cy.get(el.txtTitle).should('have.text',message);
   }
  
   verficarCarrinho(info){
    cy.get(el.elementVerificar,{timeout: 3000}).should(info);
   }
  
   verficarBadgeCarrinho(info){
    cy.get(el.elementBadge,{timeout: 3000}).should(info);
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
  
   errorMessageUsername(){
     return(el.txtErrorMessageUsername)
   }
   errorMessagePassword(){
    return(el.txtErrorMessagePassword)
  }
  ErrorMessageEmptyFields(){
    return(el.txtErrorMessageEmptyFields)
  }
  ErrorMessageLastName(){
    return(el.txtErrorMessageLastName)
  }
  ErrorMessageFirstName(){
    return(el.txtErrorMessageFirstName)
  }
  ErrorMessagePostalCode(){
    return(el.txtErrorMessagePostalCode)
  }
   
  }
  
  export default new Validar();