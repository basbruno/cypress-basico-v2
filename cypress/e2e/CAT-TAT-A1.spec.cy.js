/// <reference types="Cypress" />



beforeEach(() => {
  
cy.visit('./src/index.html')

})


describe('Central de Atendimento ao Cliente TAT', function() {

 
    



  it('verifica o título da aplicação', function() {
    
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

  })

it('preenche os campos obrigatorios e envia o formulario ',function(){

  cy.get('#firstName')
  .click()
  .type('Bruno ')


  cy.get('#lastName')
  .click()
  .type(' araujo da silva',{delay:0})

  cy.get('#email')
  .click()
  .type('bruno_bas@outlook.com')

  cy.get('#phone')
  .click()
  .type('11961495926')

  cy.get('#open-text-area')
  .click()
  .type('Quero ajuda com Cypress')

  cy.get('.button')
  .click()

  


  cy.get('.success')
  .should('be.visible')


  


})

it('exibe mensagem de erro ao submeter o formulario com um email com formatação invalida',function(){



  cy.get('#firstName')
  .click()
  .type('Bruno ')


  cy.get('#lastName')
  .click()
  .type(' araujo da silva',{delay:0})

  cy.get('#email')
  .click()
  .type('bruno_basoutlook.com')

  cy.get('#phone')
  .click()
  .type('11961495926')

  cy.get('#open-text-area')
  .click()
  .type('Quero ajuda com Cypress')

  cy.get('.button')
  .click()


  cy.get('.error')
  .should('be.visible')

})


it('verifica se celular aceita letras',function(){



  
  cy.get('#phone')
  .click()
  .type('hh')
  .should('have.value', '')

  





})

})