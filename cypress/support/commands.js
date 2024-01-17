// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function() {

    cy.get('#firstName')
    .click()
    .type('Bruno ')
  
  
    cy.get('#lastName')
    .click()
    .type(' araujo da silva')
  
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