/// <reference types="Cypress" />

/*const faker = require('faker')*/



beforeEach(() => {
  
cy.visit('./src/index.html')
/*user.email = faker.internet.email()
user.firstName = faker.name.firstName()
user.lastName = faker.name.lastName()
user.phone = faker.internet.phone()*/
})


describe('Central de Atendimento ao Cliente TAT', function() {

 
    



  it('Exercico extra 1', function() {
    
    cy.get('#product').select('Mentoria').type('7888')

  })



  it('Exercico extra 2, exibe mensagem de erro ao submeter o formulario com um email com formtação errada', function() {
    
    cy.get('#firstName')
    .click()
    .type('Bruno ')
  
  
    cy.get('#lastName')
    .click()
    .type(' araujo da silva',{delay:10})
  
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
  
it('Exercicio 3, verifica se celular aceita letras',function(){



  
  cy.get('#phone')
  .click()
  .type('hh')
  .should('have.value', '')

  





})


it('Exercicio 4, exibe mensagem de erro quando o telefone se torna obrigatorio mas n]ao é preenchido antes do envio do formulario',function(){



  cy.get('#firstName')
  .click()
  .type('Bruno ').clear()


  cy.get('#lastName')
  .click()
  .type(' araujo da silva',{delay:10})

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


  





})


it('exer. 5 preenche e limpa os campos nome,sobrenome,email,telefone',function(){



  
  cy.get('#firstName')
  .click()
  .type('Bruno ').clear().should('have.value', '')


  cy.get('#lastName')
  .click()
  .type(' araujo da silva',{delay:10}).clear().should('have.value', '')

  cy.get('#email')
  .click()
  .type('bruno_bas@outlook.com').clear().should('have.value', '')

  cy.get('#phone')
  .click()
  .type('11961495926').clear().should('have.value', '')

  cy.get('#open-text-area')
  .click()
  .type('Quero ajuda com Cypress').clear().should('have.value', '')
  





})

it('Exercicio 6, exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatorios',function(){

  cy.get('.button').click()

  
  cy.get('.error')
  .should('be.visible')



})

it('exercicio 7 comandos customizados(hardcoded)',function(){ 
  cy.fillMandatoryFieldsAndSubmit()
  
  cy.get ('.success').should('be.visible')
  
  
  })

it.only('exercico 8 uso do cy.countains', function(){
  cy.get('#firstName')
  .click()
  .type('Bruno ')


  cy.get('#lastName')
  .click()
  .type(' araujo da silva',{delay:10})

  cy.get('#email')
  .click()
  .type('bruno_bas@outlook.com')

  cy.get('#phone')
  .click()
  .type('11961495926')

  cy.get('#open-text-area')
  .click()
  .type('Quero ajuda com Cypress')

  cy.contains('.button', 'Enviar').click()


})

})